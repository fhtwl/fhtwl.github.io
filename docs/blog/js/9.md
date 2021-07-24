--- 
title: 使div外层套上一个div
date: 2019-06-20
categories: 
 - 前端
tags: 
 - js
---
``` javascript
table_box()
function table_box(){
    function getByClass (clsName){
        var aDiv = [];
        if(document.getElementsByClassName){
            aDiv = document.getElementsByClassName(clsName);
        }else{
            var aObj = document.getElementsByTagName('*');
            for(var i=0;i<aObj.length;i++){
                (function (i){
                    var nameClass = aObj[i].className.split(' ');
                    if(nameClass){
                        for(var j=0;j<nameClass.length;j++){
                            (function (j){
                                if(nameClass[j] == clsName){
                                    aDiv.push(aObj[i]);
                                }
                            })(j)
                        }
                    }
                })(i);
            }
        }
        return aDiv;
    }
    var oContent_essay_wrap = getByClass('byl_content_article')[0];
    var aTable = oContent_essay_wrap.getElementsByTagName('table');
    if(aTable){
        for(var i=0;i<aTable.length;i++){
            (function (i){
                var oDiv = document.createElement('div');
                oDiv.className = 'table_box';
                var str = aTable[i].innerHTML;
                str = '<table>' + str + '</table>';
                oDiv.innerHTML = str;
                aTable[i].parentNode.replaceChild(oDiv,aTable[i]);
            })(i);
        }
    }
}
```