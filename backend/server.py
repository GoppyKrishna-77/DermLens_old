from flask import Flask, request, jsonify
import datetime
from model import findSkinDisease, findHairDisorder
from findDoc import findDoctor
from dietRec import getRecommendations

def random_filename():
    basename = "image"
    suffix = datetime.datetime.now().strftime("%y%m%d_%H%M%S")
    filename = "_".join([basename, suffix])

    return filename


app = Flask(__name__)


@app.route("/skin-disease", methods=["POST"])
def skinDisease():
    print(request)

    bytesOfImage = request.get_data()
    fileName = random_filename()
    with open(f"./images/{fileName}.jpeg", "wb") as out:
        out.write(bytesOfImage)

    # Deep Learning Model Prediction
    diseaseName, accuracy = findSkinDisease(f"./images/{fileName}.jpeg")
    diseaseName = diseaseName.strip()
    recommendedDocs = findDoctor(diseaseName)

    tips, foods_to_take, foods_not_to_take, warning = getRecommendations(diseaseName, 'ta')

    # print(recommendedDocs)

    details = {
        "DiseaseName": diseaseName.title(),
        "Tips": tips,
        "FoodsToTake": foods_to_take,
        "FoodsNotToTake": foods_not_to_take,
        "Doctors": recommendedDocs,
        "Warning": warning,
    }   
    
    print(details)

    details = jsonify(details)

    return details

@app.route("/hair-disorder", methods=["POST"])
def hairDisorder():
    print(request)

    bytesOfImage = request.get_data()
    fileName = random_filename()
    with open(f"./images/{fileName}.jpeg", "wb") as out:
        out.write(bytesOfImage)

    # Deep Learning Model Prediction
    diseaseName, accuracy = findHairDisorder(f"./images/{fileName}.jpeg")
    diseaseName = diseaseName.strip()
    recommendedDocs = findDoctor(diseaseName)

    tips, foods_to_take, foods_not_to_take, warning = getRecommendations(diseaseName)

    details = {
        "DiseaseName": ""+diseaseName.title(),
        "Tips": tips,
        "FoodsToTake": foods_to_take,
        "FoodsNotToTake": foods_not_to_take,
        "Doctors": recommendedDocs,
        "Warning": warning,
    }   
    
    print(details)

    details = jsonify(details)


    return details


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
