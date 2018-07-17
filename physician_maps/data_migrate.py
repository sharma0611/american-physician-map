import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "physician_maps.settings")
django.setup()

#imports
import pandas as pd
import numpy as np
from core.models import Doctor

df = pd.read_csv("../data_analysis/processed_data.csv")

for index, row in df.iterrows():
    first_name = row['Physician_First_Name']
    if not first_name:
        first_name = ""
    middle_name = row['Physician_Middle_Name']
    if not middle_name:
        middle_name = ""
    last_name = row['Physician_Last_Name']
    if not last_name:
        last_name = ""
    name = str(first_name) + " " + str(middle_name) + " " + str(last_name)
    name = name.replace("  ", " ")
    
    address = row["Recipient_Primary_Business_Street_Address_Line1"] + ", " + row["Recipient_City"] + ", " + row["Recipient_State"] + ", " + row["Recipient_Country"]
    zipcode = row["Recipient_Zip_Code"]
    specialty = row['Physician_Specialty']

    #Create doctor object with fields from above
    doctor = Doctor(name=name, address=address, zipcode=zipcode, specialty=specialty)
    doctor.save()
