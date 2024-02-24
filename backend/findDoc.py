import pandas as pd

dermatologists_data = pd.read_csv('doctordata.csv')

def findDoctor(disease):
    recommended_dermatologists = dermatologists_data[dermatologists_data['Specialization'] == disease]

    recommended_dermatologists = recommended_dermatologists.sort_values(by='Patient_Rating', ascending=False)

    recommended_dermatologists = recommended_dermatologists.head(5).to_dict(orient='records')

    return recommended_dermatologists

        