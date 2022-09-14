import data from "../data/data.json" assert {type: "json"}; // Importing JSON File

    function Assistant(group) 
        {
        return data.filter((item)=> item.type ==="assistant").find((item)=>item.group === group);
        }

    function Students(group) 
        {
            return data.filter((item)=> item.type === null && item.group === group).map((item) => item.name);
        }
    function Members (group) 
        {
            var createAssistant = Assistant(group);
            var createStudents = Students(group);
            return {"Group:":group, "Persons:":createStudents, "Assistant:":createAssistant.name}    
        }

            console.log (Members("Orchid"));

// Source WEB Sites

// https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules/// https://yasinefemdalkilic.medium.com/javascript-find-map-filter-findindex-methodlar%C4%B1-ve-kullan%C4%B1mlar%C4%B1-4070e59403df
// https://yasinefemdalkilic.medium.com/javascript-find-map-filter-findindex-methodlar%C4%B1-ve-kullan%C4%B1mlar%C4%B1-4070e59403df
// https://www.webcebir.com/384-javascript-array-find-method-kullanimi-dersi.html
// https://stackoverflow.com/questions/21776389/javascript-object-grouping

