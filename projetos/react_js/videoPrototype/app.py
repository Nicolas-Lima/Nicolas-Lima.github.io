import subprocess

# Defina o caminho completo para o arquivo index.py
caminho_arquivo = r'C:\Users\Nicolas\Dropbox\Programacao\React JS 2\projetos\videoPrototype\index.py'

# Use a função subprocess.Popen para executar o arquivo com o interpretador python em segundo plano

subprocess.Popen(['python'], creationflags=subprocess.CREATE_NO_WINDOW)
subprocess.Popen(['python', caminho_arquivo], creationflags=subprocess.CREATE_NO_WINDOW)
