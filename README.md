PREDICTING STOCK MARKET TRENDS ON VIDEO-GAME COMPANY STOCK DATA
---------------------------------------------------------------
PURPOSE

This project was created for CODE Lancashire, and is designed to take existing stock market data from a provided .csv file and then performs simple TRAIN/TEST separation to make predictions. 
There are three models shown in the project, and they are increase in complextity. This project was created using Python and Jupyter to ensure sequential running and maximum levels of transferability/practicality.
The required libaries are stated at the start of the .ipynb file, and there is a function that detects and installs the required notebooks if they are not present on the users operating system*. This project also 
utilises Seaborn and Matplotlib libraries to create different plots, which are present in the GRAPHS and VISUALISATIONS folder of this repo. The VISUALISATIONS folder contains plots of the first (individual) decision
trees for each of the models, and their primary puprose is to be displayed in the presentation accompanying this project for CODE Lancashire.

----------------------------------------------------------------
INSTALLATION/RUNNING 

This project uses Python via Jupyter Notebook. To install and run the project, download the repo and open the file (ProjectFile.ipynb) in an IDE that supports Juptyer Notebook (i.e. VSCode) or through JuptyerLab/Juptyer Notebook.
Make sure that the Top10VideoGameStocks.csv remains in the same folder as the project file otherwise the file will not be read in correctly. Also upon starting run the function that clears the CHECKPOINTS folder otherwise
the backtesting for each model will not run.

