SET libreoffice_path="C:\Program Files\LibreOffice\program\soffice.exe"
SET input_file=base.xlsx
SET output_file=base.html

%libreoffice_path% --convert-to html --infilter="Calc Office Open XML" %input_file% --outdir ./
set /p exitkey= "Press any key to close..."
