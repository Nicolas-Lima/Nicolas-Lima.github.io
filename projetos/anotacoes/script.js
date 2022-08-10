const PDFsName = {
    html: "HTML",
    css: "CSS",
    fundamentos: "Fundamentos",
    estruturasDeControle: "Estruturas de controle",
};

const pdf = document.querySelector("#pdf");

const inputHeightPDF = document.querySelector("#heightPDF");
const inputWidthPDF = document.querySelector("#widthPDF");

inputHeightPDF.addEventListener("input", (e) => {
    const typedValue = inputHeightPDF.value;

    if(isNaN(typedValue)) {
        inputHeightPDF.value = "";
        inputHeightPDF.setAttribute("placeholder", "O valor digitado não é um número!");
    }

    else {
        pdf.style.height = `${typedValue}px`;
    };
});

inputWidthPDF.addEventListener("input", () => {
    const typedValue = inputWidthPDF.value;

    if(isNaN(typedValue)) {
        inputWidthPDF.value = "";
        inputWidthPDF.setAttribute("placeholder", "O valor digitado não é um número!");
    }

    else {
        pdf.style.width = `${typedValue}px`;
    };
});

const switchPDF = document.querySelector("#switchPDF");

const buttonsSwitchPDF = switchPDF.querySelectorAll("button[value]");

buttonsSwitchPDF.forEach(buttonSwitchPDF => {
    // Disabling the html.pdf button

    if(buttonSwitchPDF.value == "html") {
        buttonSwitchPDF.setAttribute("disabled", "");
    };

    buttonSwitchPDF.addEventListener("click", () => {
        const buttonSwitchPDFValue = buttonSwitchPDF.value;

        function changePDFData(path) {
            pdf.setAttribute("data", path);
        };

        function changePDFTitle(PDFName) {
            const PDFTitle = document.querySelector("#PDFTitle");
            PDFTitle.innerText = PDFName;
        };

        let PDFPath;

        if(buttonSwitchPDF.hasAttribute("javascriptPDF")) {
            PDFPath = `pdfs/javascript/${buttonSwitchPDFValue}.pdf`;
        }
        
        else {
            PDFPath = `pdfs/${buttonSwitchPDF.value}.pdf`;
        };

        changePDFData(PDFPath);
        changePDFTitle(PDFsName[buttonSwitchPDFValue]);

        // Changing the state of the buttons

        const activeButton = switchPDF.querySelector("button[disabled]");
        activeButton.removeAttribute("disabled");

        buttonSwitchPDF.setAttribute("disabled", "");
    });
});