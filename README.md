# american-physician-map
Simple web app to serve search bar and map UI to locate physicians across the US. 

## Setup

The following instructions will allow you to get a version of this app up and running locally.

**1) Get this repo & install requirements**

~~~bash
$ cd ~
$ git clone https://github.com/sharma0611/american-physician-map.git
$ cd ~/american-physician-map
$ virtualenv env
$ source env/bin/activate
$ pip install -r physician_maps/requirements.txt
~~~

**2) Download & Unzip .csv data from the following link into data_analysis/**

* https://www.cms.gov/OpenPayments/Explore-the-Data/Dataset-Downloads.html


**3) Process the data into the columns we need** 

~~~bash
$ cd ~/american-physician-map
$ cd data_analysis
$ jupyter nbconvert --execute data_clean.ipynb
~~~

You will now have a file processed_data.csv in the data_analysis folder. 

