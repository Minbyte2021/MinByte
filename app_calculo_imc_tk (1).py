"""
Autor: John Carlos Arrieta Arrieta
Objetivo: Sesiones 21, 23 y 23 de MisionTic
Detalles: Uso de TKinter para desarrollo de GUI 
          y Manejo de Archivos
"""
import tkinter as tk
from tkinter.constants import ANCHOR
import tkinter.font as tkFont
from tkinter import Listbox, messagebox as alerta
import os
import pickle as disco

# obtener la ruta del programa
ruta = os.path.abspath(__file__)
partes = os.path.split(ruta)
ruta = partes[0]+ os.sep + "historico_imc.txt"

def recalcular_imc( evento):
        medidas = evento.widget.get(ANCHOR)
        peso, altura = medidas.split(", ")
        peso = float(peso)
        altura = float(altura)
        app.campo_peso.delete("0", tk.END)
        app.campo_peso.insert("0", str(peso))
        app.campo_altura.delete("0", tk.END)
        app.campo_altura.insert("0", str(altura))
        app.mostrar_imc()

class App:

    # la bd
    historico = None
    def __init__(self, root):
        self.historico = {}
        root.title("CALCULADORA DE IMC CON HISTORICO")
        width=637
        height=448
        screenwidth = root.winfo_screenwidth()
        screenheight = root.winfo_screenheight()
        tamanio_ventana = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
        root.geometry(tamanio_ventana)
        root.resizable(width=False, height=False)

        self.eti_titulo = tk.Label(root)
        ft = tkFont.Font(family='Times',size=20)
        self.eti_titulo["font"] = ft
        self.eti_titulo["fg"] = "#0f60af"
        self.eti_titulo["justify"] = "center"
        self.eti_titulo["text"] = "CALCULO DE IMC"
        self.eti_titulo.place(x=140,y=40,width=283,height=33)

        self.eti_peso=tk.Label(root)
        ft = tkFont.Font(family='Times',size=14)
        self.eti_peso["font"] = ft
        self.eti_peso["fg"] = "#333333"
        self.eti_peso["justify"] = "right"
        self.eti_peso["text"] = "PESO:"
        self.eti_peso.place(x=20,y=110,width=100,height=35)

        self.campo_peso=tk.Entry(root)
        self.campo_peso["borderwidth"] = "1px"
        ft = tkFont.Font(family='Times',size=14)
        self.campo_peso["font"] = ft
        self.campo_peso["fg"] = "#061545"
        self.campo_peso["justify"] = "left"
        self.campo_peso["text"] = ""
        self.campo_peso["relief"] = "ridge"
        self.campo_peso.place(x=130,y=110,width=265,height=30)

        self.eti_altura=tk.Label(root)
        ft = tkFont.Font(family='Times',size=14)
        self.eti_altura["font"] = ft
        self.eti_altura["fg"] = "#333333"
        self.eti_altura["justify"] = "right"
        self.eti_altura["text"] = "ALTURA:"
        self.eti_altura.place(x=20,y=170,width=100,height=35)

        self.campo_altura=tk.Entry(root)
        self.campo_altura["borderwidth"] = "1px"
        ft = tkFont.Font(family='Times',size=14)
        self.campo_altura["font"] = ft
        self.campo_altura["fg"] = "#061545"
        self.campo_altura["justify"] = "left"
        self.campo_altura["text"] = ""
        self.campo_altura["relief"] = "ridge"
        self.campo_altura.place(x=130,y=170,width=265,height=30)

        self.eti_nombre=tk.Label(root)
        ft = tkFont.Font(family='Times',size=14)
        self.eti_nombre["font"] = ft
        self.eti_nombre["fg"] = "#333333"
        self.eti_nombre["justify"] = "right"
        self.eti_nombre["text"] = "NOMBRE:"
        self.eti_nombre.place(x=20,y=220,width=100,height=35)

        self.campo_nombre=tk.Entry(root)
        self.campo_nombre["borderwidth"] = "2px"
        ft = tkFont.Font(family='Times',size=14)
        self.campo_nombre["font"] = ft
        self.campo_nombre["fg"] = "#fe1414"
        self.campo_nombre["justify"] = "left"
        self.campo_nombre["text"] = ""
        self.campo_nombre["relief"] = "ridge"
        self.campo_nombre.place(x=130,y=220,width=265,height=30)

        self.eti_imc=tk.Label(root)
        ft = tkFont.Font(family='Times',size=16)
        self.eti_imc["font"] = ft
        self.eti_imc["fg"] = "#1125f5"
        self.eti_imc["justify"] = "right"
        self.eti_imc["text"] = "IMC:"
        self.eti_imc.place(x=20,y=280,width=100,height=35)

        self.eti_resultado=tk.Label(root)
        self.eti_resultado["bg"] = "#20540a"
        ft = tkFont.Font(family='Times',size=16)
        self.eti_resultado["font"] = ft
        self.eti_resultado["fg"] = "#caebca"
        self.eti_resultado["justify"] = "left"
        self.eti_resultado["text"] = ""
        self.eti_resultado.place(x=130,y=280,width=265,height=30)

        self.btn_calcular=tk.Button(root)
        self.btn_calcular["bg"] = "#60f47c"
        ft = tkFont.Font(family='Times',size=14)
        self.btn_calcular["font"] = ft
        self.btn_calcular["fg"] = "#000000"
        self.btn_calcular["justify"] = "center"
        self.btn_calcular["text"] = "Calcular"
        self.btn_calcular.place(x=430,y=350,width=97,height=30)
        self.btn_calcular["command"] = self.mostrar_imc

        self.btn_cancelar=tk.Button(root)
        self.btn_cancelar["bg"] = "#f8b8ac"
        ft = tkFont.Font(family='Times',size=16)
        self.btn_cancelar["font"] = ft
        self.btn_cancelar["fg"] = "#000000"
        self.btn_cancelar["justify"] = "center"
        self.btn_cancelar["text"] = "Cancelar"
        self.btn_cancelar.place(x=50,y=350,width=97,height=30)
        self.btn_cancelar["command"] = self.limpiar_ventana

        self.listbx_histotico=tk.Listbox(root)
        self.listbx_histotico["borderwidth"] = "1px"
        ft = tkFont.Font(family='Times',size=10)
        self.listbx_histotico["font"] = ft
        self.listbx_histotico["fg"] = "#333333"
        self.listbx_histotico["justify"] = "center"
        self.listbx_histotico.place(x=420,y=110,width=105,height=202)
        self.listbx_histotico["listvariable"] = "calculos"
        self.listbx_histotico.bind('<<ListboxSelect>>', recalcular_imc)
        self.btn_guardar=tk.Button(root)
        self.btn_guardar["bg"] = "#1e90ff"
        ft = tkFont.Font(family='Times',size=14)
        self.btn_guardar["font"] = ft
        self.btn_guardar["fg"] = "#f5f6f8"
        self.btn_guardar["justify"] = "center"
        self.btn_guardar["text"] = "GUARDAR"
        self.btn_guardar.place(x=300,y=350,width=97,height=30)
        self.btn_guardar["command"] = self.guardar_datos

        self.btn_buscar=tk.Button(root)
        self.btn_buscar["bg"] = "#fad400"
        ft = tkFont.Font(family='Times',size=14)
        self.btn_buscar["font"] = ft
        self.btn_buscar["fg"] = "#000000"
        self.btn_buscar["justify"] = "center"
        self.btn_buscar["text"] = "BUSCAR"
        self.btn_buscar.place(x=180,y=350,width=97,height=30)
        self.btn_buscar["command"] = self.buscar_datos

    def mostrar_imc(self):
        peso = float(self.campo_peso.get())
        altura = float(self.campo_altura.get())
        imc = self.calcular_imc(peso, altura)
        mensaje =""
        if imc < 18.5:
            mensaje = "Muy bajo de peso"
        elif imc >= 18.5 and imc <= 24.9:
            mensaje ="Muy bien de peso"
        elif imc >= 25 and imc <= 29.9:
            mensaje ="Elevado de peso"
        else:
            mensaje = "Muy elevado de peso"
        mensaje = str(round(imc,1))+ ": "+mensaje
        self.eti_resultado.configure(text=mensaje)  
        
    def limpiar_ventana(self):
        print("Limpiar")

    def calcular_imc(self, peso, altura):
        return peso / altura ** 2

    
    def guardar_datos(self):
        nombre = self.campo_nombre.get()
        nombre = nombre.strip()
        peso = float(self.campo_peso.get())
        altura = float(self.campo_altura.get())
        imc = self.calcular_imc(peso, altura)
        msj = "¿Desea guardar estas medidad?: \n"
        msj += "Peso: "+ str(peso)+"\n"
        msj += "Altura: "+ str(altura)+"\n"
        msj += "IMC: "+ str(round(imc,1))
        res = alerta.askquestion("Confirmar",msj)
        if res == alerta.YES:
            datos = []
            if not nombre:
                alerta.showerror("CORRECCION","Debe ingresar el NOMBRE")
            else:
                nombre = nombre.upper()
                if not self.historico:
                    self.historico[nombre] = datos
                else:
                    if nombre in self.historico.keys():
                        datos = self.historico[nombre]
                    else:
                        self.historico[nombre] = datos
                medidas = [ peso, altura]
                datos.append(medidas)    
                with open(ruta, "wb") as archivo:
                    disco.dump(self.historico, archivo)



    def buscar_datos(self):
        with open(ruta, "rb") as archivo:
            self.historico = disco.load(archivo)
        nombre = self.campo_nombre.get()
        if not nombre:
                alerta.showerror("CORRECCION","Debe ingresar el NOMBRE")
        else:
            nombre = nombre.upper()
            if not self.historico:
                    alerta.showinfo("BD Vacia", "No existen datos en el historico")
            else:
                if nombre in self.historico.keys():
                        self.listbx_histotico.delete(0, tk.END)
                        datos = self.historico[nombre]
                        for medidad in datos:
                            item = str(medidad[0])+", "+str(medidad[1])
                            self.listbx_histotico.insert(tk.END, item)
                else:
                        alerta.showinfo("RESULTADO", nombre+" no tiene histirico")
               
app = None

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
