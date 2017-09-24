---
layout: archive
author_profile: true
permalink: /energy_efficiency/
---
{{ page.excerpt | markdownify }}
# Energy Efficiency of Residential Building Design
---
## Objective

* The objective of the project is to develop an **Android application** to predict the dependence of **energy efficiency** of a residential building of a particular area on its **structure and design** (taking 8 structural parameters as input). The energy efficiency is calculated in terms of the **Heating Load** and **Cooling Load** of the building which can further help to modify the building design for achieving maximum possible energy conservation in future. 
* The application involves the use of statistical tools as well as **Machine learning algorithms** and frameworks trained as per the previously available data for that area. 

* The aim of the project is to eliminate the need of including the **environmental parameters** of any particular area since the app will be trained differently for different areas (depending on the previously available data for the area) and hence reducing the possibility of ambiguity or loss of accuracy in the predicted results.  

## Working
* The project involves collecting data (the Cooling load and the Heating load) for various residential buildings of a particular locality as well as the corresponding 8 structural parameters including:
  1. Relative Compactness
  5. Overall Height 
  2. Surface Area
  6. Orientation 
  3. Wall Area
  7. Glazing Area
  4. Roof Area
  8. Glazing Area Distribution

## Results

* We applied different Machine learning algorithms on the dataset, **Random Forest** gave the maximum accuracy of **98%**.

## Scope
* The project has immense scope for future research and improvement. The application once released can be trained for every area thus eliminating the need to take into account the environmental variations. 
* The idea can also extend to include various other structural parameters of the building like the number of windows, their orientation, construction materials etc. 
* The same concept of predicting energy efficiency can be applied to offices and other buildings too, apart from the residential buildings; which will require some different features to be selected for carrying out the research.  

## Limitations
* Since the size of the dataset we had was limited, maybe we are not able to come up with the most efficient technique, but it can be achieved once we get sufficient dataset.
* Right now, we have only taken into account only 8 structural parameters, being limited by the kind of dataset we had.
* The predictions of the HL and the CL values may show deviations from the actual values for the areas which have huge variations in climatic conditions.
