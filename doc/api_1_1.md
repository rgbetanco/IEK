#Project API
###V1.2 ( November 22, 2018 )
___
>Modifitication: New API to list CES ( EUREKA Marketplace)
>API Moved to server ec2-34-192-48-45.compute-1.amazonaws.com:3000, so all API should use this url

###New Table - CompanySet_Temp
|name|type|extra|description|
|---|---|---|---|
|comp_id|bigInt(20)|Auto-increment|Primary Key|
|comp_banno|varchar(10)|---|Company VAT Number|
|comp_name|varchar(100)|---|Company's name|
|comp_industry|varchar(100)|---|---|
|comp_location|varchar(500)|---|---|
|comp_area|varchar(50)|---|---|
|comp_amount|varchar(50)|---|---|
|comp_employee|varchar(20)|---|---|
|comp_contact|varchar(50)|---|---|
|comp_tel|varchar(30)|---|telephone number|
|comp_fax|varchar(30)|---|fax|
|comp_url|varchar(200)|---|---|
|comp_extraUrl|varchar(200)|---|FB|
|comp_tag|varchar(200)|---|---|
|comp_desc|text|---|Company's description|
|comp_mediaReport|text|---|Media reports|
|comp_business|text|---|Company's business description|
|comp_createdate|varchar(20)|---|---|
|done|int|default = 0|data already scraped|
|taken|int|default = 0|system used flag|

###API
/start
####Description
Start the scrapper function. The scrapper works only on the records where the field "done" is equal to zero. The scrapper first scrape yourator.com and save the information on CompanySet_temp table and a logger file, second scrape 104.com.tw and save the relevant information on CompanySet_temp table replacing, if duplicated, the data saved from yourator.
####Method
GET
####Parameters
|name|description|
|---|---|
|start|Initial id to start the scrapper|
|end|id to end the scrapper|
####Result
|name|description|
|---|---|
|r|0 means success|
|r|> 0 means failure|

###API
/stop
####Description
Stop the scrapper function.
####Method
GET
####Parameters
None
####Result
|name|description|
|---|---|
|r|0 means success|
|r|> 0 means failure|

###API
/clear
####Description
Clear all the scrapped information from CompanySet_temp table and set done to zero on ALL records.
####Method
GET
####Parameters
None
####Result
|name|description|
|---|---|
|r|0 means success|
|r|> 0 means failure|

###API
/company
####Description
Insert new company initial information to CompanySet_temp table. The information need to be send as JSON format array. The key names are: companyid, name, capital and opendate.
####Method
POST
####Parameters
|name|description|
|---|---|
|data|JSON formatted data, ex: [{"company_id":123, "name":"abc", "capital":123, "open_date":123},{"company_id":345, "name":"def", "capital":456, "open_date":456}]|
####Result
|name|description|
|---|---|
|r|0 means success|
|r|> 0 means failure|

###API
/company/list
####Description
List the companies in CompanySet_temp table
####Method
GET
####Parameters
|name|description|
|---|---|
|init|id of first company in table to list|
|end|id of the last company in table to list|
####Example
> ec2-34-192-48-45.compute-1.amazonaws.com:3000/company/list?init=18&end=19

####Result
JSON Array with the list of companies within range

####API
/eureka

####Method
GET

####Parameters
NONE
####Return
JSON
#####Return example
[
    {
        "id": 1220,
        "code": "T0008188",
        "name": "0WI audio",
        "phone": "P: 33 6991 29677 ",
        "address": "0WI audio - PCE - TechIndus D 645 Rue mayor de Monticher Aix les Milles 13290 France",
        "country": "France",
        "url": "http://www.0WIaudio.com",
        "about": "0WI audio is born from the lack of quality in mobile music devices. At 0WI audio we decided to change this rule. We have built a battery powered mobile Music Box that re-introduces pure music back into day-to-day life and  delivers true Human emotions.",
        "brand": "",
        "categories": "Advertising, Marketing, Entertainment &amp; Content,Audio/High-End/High Performance,Lifestyle (Family, Beauty, Pet),Smar",
        "eureka_categories": "Audio/Video  (Eureka Park)",
        "contact": "",
        "marketplace": "Eureka Park",
        "floor_plan": "Sands, Hall G - 50615",
        "floor_url_plan": "https://ces19.mapyourshow.com/7_0/floorplan_link.cfm?show_id=ces19&alt_entry=true&curr_pri=facility&booth=50615&exhid=T0"
    }
 ]