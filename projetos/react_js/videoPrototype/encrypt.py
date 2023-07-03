from cryptography.fernet import Fernet
import json
from datetime import datetime

def getDataJson():
    with open('./web/downloadedVideos.json') as file:
        data = json.load(file)
    return data

# Encrypt and Decrypt canPlay attribute.

def getCipherSuite():
    cipher_suite = Fernet("j01RLs1H0YchnOd16uAFEiA9FehvEp-AFDfr5YKxzSo=")
    return cipher_suite

def setCanPlay():
    cipher_suite = getCipherSuite()

    # Verificando se pode tocar
    canPlay = 10 <= 10 and 20 < 21

    # Criptografar o valor usando a chave de criptografia
    canPlayEncrypted = cipher_suite.encrypt(str(canPlay).encode()).decode()
    data = getDataJson()
    data["canPlay"] = canPlayEncrypted

    # Salvar o dicionário atualizado em um arquivo JSON
    with open("./web/downloadedVideos.json", "w") as file:
        json.dump(data, file, indent=2)

def getCanPlay():
    cipher_suite = getCipherSuite()
    data = getDataJson()
    encryptedvalue = data["canPlay"]

    # Descriptografar o valor do atributo
    canPlay = False
    try:
        canPlay = cipher_suite.decrypt(encryptedvalue.encode()).decode()
    except:
        pass

    return canPlay


def get_date_time():
    date_today = datetime.today()
    date_now = datetime.now()
    day = date_today.day
    month = date_today.month    
    year = date_today.year
    hours = date_now.hour
    minutes = date_now.minute

    date_time = {
        'day': day,
        'month': month,
        'year': year,
        'hours': hours,
        'minutes': minutes
    }

    return date_time

def verify_if_can_play_and_get_time_playing():
    current_date_time = get_date_time()
    day, month, year, hours, minutes = [value for key, value in current_date_time.items()]

    hours = 11
    minutes = 16


    # Fazer condições para Pesquisar
    
    valid_conditions_to_play = [
        {
            "condition": False,
            #"condition": hours <= 20 and not (hours >= 20 and minutes >= 50),
            "time_playing": 6,
            "condition_name": "Default"
        },
        {
            "condition": hours == 11 and minutes >= 50 or hours == 12 and minutes <= 15,
            "time_playing": 15,
            "condition_name": "Hora do almoço"
        },
    ]

    is_in_valid_condition = False
    time_playing = 0

    for valid_condition in valid_conditions_to_play:
        condition = valid_condition["condition"]
        is_in_valid_condition = condition

        if is_in_valid_condition:
            time_playing = valid_condition["time_playing"]
            break

    return {
        "can_play": is_in_valid_condition,
        "time_playing": time_playing
    }


#print(verify_if_can_play_and_get_time_playing())



def lockHtmlPage():
    eel.lockHtmlPage()