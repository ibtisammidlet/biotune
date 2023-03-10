chrome.action.onClicked.addListener(function(tab) {
      chrome.tabs.create({url: 'https://www.biotune.org/p/subbind.html'});
    // Tab opened.
  });






chrome.contextMenus.create({
  "id":"RCD",
  "title" : "find %s in receptors concept db",
  "type" : "normal",
  "contexts" : ["all"],
});
chrome.contextMenus.create({
  "id":"parent",
  "title" : "find binding for %s",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"GTP",
  "title" : "search in guidetopharmacology",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"europepmc",
  "title" : "search in europepmc [ML]",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"springernature",
  "title" : "search in springernature [ML]",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"biomedcentral",
  "title" : "search in biomedcentral [ML]",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"portlandpress",
  "title" : "search in portlandpress [ML]",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"medscape",
  "title" : "search in medscape [ML]",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"drugbank",
  "title" : "search in drugbank",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"psychonautwiki",
  "title" : "search in psychonautwiki",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"erowid",
  "title" : "search in erowid",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"thedrugclassroom",
  "title" : "search in thedrugclassroom",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"nootropicsindex",
  "title" : "search in nootropicsindex",
  "type" : "normal",
  "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "id":"v1.9.5+",
  "title" : "v1.9.5+",
  "contexts" : ["all"],
});



chrome.contextMenus.create({
  "id":"neeva",
  "title" : "search in neeva [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.5+",
});
chrome.contextMenus.create({
  "id":"you",
  "title" : "ask youchat [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.5+",
});
chrome.contextMenus.create({
  "id":"sci-hub",
  "title" : "find this article on sci-hub",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.5+",
});
chrome.contextMenus.create({
  "id":"v1.9.6+",
  "title" : "v1.9.6+",
  "contexts" : ["all"],
  "parentId": "v1.9.5+",
});


chrome.contextMenus.create({
  "id":"malacards",
  "title" : "search for %s in malacards [gene]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",

});
chrome.contextMenus.create({
  "id":"medicament-dz",
  "title" : "search for %s in medicament-dz [dork]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",

});
chrome.contextMenus.create({
  "id":"drugs.com",
  "title" : "search for dosage of %s in drugs.com [dork]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"stackoverflow",
  "title" : "search for %s in stackoverflow.com [coding]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"github",
  "title" : "search in github for %s [coding]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"gitlab",
  "title" : "search in gitlab for %s [coding]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"wholisticresearch",
  "title" : "go to wholisticresearch [ven]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"pglchem",
  "title" : "search in pglchem for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"nootropicsfrontline",
  "title" : "search in nootropicsfrontline for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"russianmeds",
  "title" : "search in russianmeds for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"everychem",
  "title" : "search in everychem for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
});
chrome.contextMenus.create({
  "id":"alphagresearch",
  "title" : "search in alphagresearch for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+",
}); 
chrome.contextMenus.create({
  "id":"v1.9.7+",
  "title" : "v1.9.7+",
  "contexts" : ["all"],
  "parentId": "v1.9.6+",
});


/*
chrome.contextMenus.create({
  "id":"dezgo_anime",
  "title" : "ganerate img for %s [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"dezgo_upscale",
  "title" : "upscale [AI]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.7+",
});
*/
chrome.contextMenus.create({
  "id":"google_bind",
  "title" : "globle binding search for %s [dork]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"buy-pharma",
  "title" : "search in buy-pharma for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"biolabshop",
  "title" : "search in biolabshop for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"trc-canada",
  "title" : "search in trc-canada for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"purelifedz",
  "title" : "search in purelifedz for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"haylla",
  "title" : "search in haylla for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
});
chrome.contextMenus.create({
  "id":"iherb",
  "title" : "search in iherb for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+",
}); 
chrome.contextMenus.create({
  "id":"v1.9.8+",
  "title" : "v1.9.8+",
  "contexts" : ["all"],
  "parentId": "v1.9.7+",
});











chrome.contextMenus.create({
  "id":"namu.wiki",
  "title" : "search in namu.wiki for %s",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+",
});
chrome.contextMenus.create({
  "id":"magpharm",
  "title" : "search in magpharm for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+",
});
chrome.contextMenus.create({
  "id":"alldaychemist",
  "title" : "search in alldaychemist for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+",
});
chrome.contextMenus.create({
  "id":"you.random.hashtag",
  "title" : "ganerate hashtag for %s [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+",
});
chrome.contextMenus.create({
  "id":"jsdelivr",
  "title" : "go to jsdelivr [coding]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.8+",
});
chrome.contextMenus.create({
  "id":"jsdelivr-purge",
  "title" : "go to jsdelivr purge [coding]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.8+",
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
/**
you can't use contains"substance name" in url requset
because it will make the addon not scrap some substnace
due to deffernt subtance sapartor in bindingdb page.


APi:
https://www.springernature.com/gp/find?queryString=care&pageNumber=1
https://www.biomedcentral.com/search?query=care&searchType=publisherSearch
https://portlandpress.com/biochemj/search-results?page=1&q=care&fl_SiteID=1000022
https://search.medscape.com/search/?q=care
https://go.drugbank.com/unearth/q?searcher=drugs&query=care
https://psychonautwiki.org/w/index.php?search=care&title=Special%3ASearch&go=Go
https://www.erowid.org/search.php?exclude=&q=care&x=3&y=7
https://thedrugclassroom.com/?s=care
https://nootropicsindex.com/search/?q=care

v1.9.5+
https://neeva.com/search?q=care&c=All&src=typedquery
https://you.com/search?q=care&tbm=youchat&cfr=chat
https://sci-hub.hkvisa.net/care

v1.9.6+
tools
https://www.malacards.org/search/results?query=care&pageSize=25
preserved search
https://www.google.com/search?q=care+site%3Amedicament-dz.com
https://www.google.com/search?q=modafinil+dosage+site%3Adrugs.com
https://www.google.com/search?q=jequery+site%3Astackoverflow.com
coding
https://github.com/search?q=care
https://gitlab.com/search?search=care&nav_source=navbar
buying:
https://wholisticresearch.com/shop/
https://pglchem.com/?s=Bromantane&post_type=product&type_aws=true
https://nootropicsfrontline.com/?s=NSI
https://russianmeds.com/index.php?route=product/search&search=Sulbutiamine
https://everychem.com/?s=Bromantane
https://www.alphagresearch.com/search-results?q=Tesemorelin

v1.9.7+
https://dezgo.com/ anything 3.0 (anime)
https://dezgo.com/upscale
https://www.google.com/search?q=salicin+%22IC50%22+OR+%22EC50%22+OR+%22ki%22

v1.9.8+
source:https://boards.4channel.org/fit/thread/69921476/nsg-nootssupplements-general
https://www.buy-pharma.md/Products/search?keyword=care
https://biolabshop.pl/module/ambjolisearch/jolisearch?s=care
need trustability check
https://www.trc-canada.com/products-listing/?searchBox=moda&type=searchResult
simsonpharma.com (need navigation)
pharmasstore.com (from ukrain)
>>https://you.com/search?q=site+to+buy+Metadoxine&fromSearchBar=true&tbm=youchat
https://purelifedz.com/products/search/care
https://haylla.com/?subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&cid=815&q=care&dispatch=products.search
https://dz.iherb.com/search?kw=care
https://novelai.net/stories start from scratch

v1.9.9+
https://namu.wiki/Search?q=care
https://www.magpharm.com/index.php?page=products&pages=0&keyword=care
https://www.alldaychemist.com/catalogsearch/result/?q=care
https://you.com/search?q=give+me+30+random+hashtag+for+Instagram+about+%22care%22&fromSearchBar=true&tbm=youchat
https://www.jsdelivr.com/github
https://www.jsdelivr.com/tools/purge
https://www.stemcell.com/products/popular-product-types/small-molecules.html
https://arxiv.org/search/q-bio
https://www.importyeti.com/

######################
## AI dork research ##
######################
"pseudoephedrine" "IC50" OR "EC50" OR "ki" binding list sorted


**/
    if (tab) {
        if (info.menuItemId === "parent"){
      chrome.tabs.create({url: 'https://www.bindingdb.org/rwd/bind/AdvancedSearch.jsp'+'?sources=0&sources=1&sources=2&sources=3&sources=4&sources=5&sources=6&criteria=&choices=compound_name:0:0:0&cn_name:0=exact&cn_text:0='+info.selectionText});
        }
        if (info.menuItemId === "RCD"){
      chrome.tabs.create({url: 'https://www.biotune.org/2019/07/what-receptors-do-antidepressants-and.html?query='+info.selectionText});
        }
        if (info.menuItemId === "GTP"){
      chrome.tabs.create({url: 'https://www.guidetopharmacology.org/GRAC/DatabaseSearchForward?searchString='+info.selectionText+'&searchCategories=all&species=none&type=all&comments=includeComments&order=rank'});
        }
       if (info.menuItemId === "europepmc"){
      chrome.tabs.create({url: 'https://europepmc.org/search?query=%28TITLE:%22'+info.selectionText+'%22%29&page=1'});
        }
       if (info.menuItemId === "springernature"){
      chrome.tabs.create({url: 'https://www.springernature.com/gp/find?queryString='+info.selectionText+'&pageNumber=1'});
        }
       if (info.menuItemId === "biomedcentral"){
      chrome.tabs.create({url: 'https://www.biomedcentral.com/search?query='+info.selectionText+'&searchType=publisherSearch'});
        }
       if (info.menuItemId === "portlandpress"){
      chrome.tabs.create({url: 'https://portlandpress.com/biochemj/search-results?page=1&q='+info.selectionText+'&fl_SiteID=1000022'});
        }
       if (info.menuItemId === "medscape"){
      chrome.tabs.create({url: 'https://search.medscape.com/search/?q='+info.selectionText+''});
        }
       if (info.menuItemId === "drugbank"){
      chrome.tabs.create({url: 'https://go.drugbank.com/unearth/q?searcher=drugs&query='+info.selectionText+''});
        }
       if (info.menuItemId === "psychonautwiki"){
      chrome.tabs.create({url: 'https://psychonautwiki.org/w/index.php?search='+info.selectionText+'&title=Special%3ASearch&go=Go'});
        }
       if (info.menuItemId === "erowid"){
      chrome.tabs.create({url: 'https://www.erowid.org/search.php?exclude=&q='+info.selectionText+'&x=3&y=7'});
        }
       if (info.menuItemId === "thedrugclassroom"){
      chrome.tabs.create({url: 'https://thedrugclassroom.com/?s='+info.selectionText+''});
        }
       if (info.menuItemId === "nootropicsindex"){
      chrome.tabs.create({url: 'https://nootropicsindex.com/search/?q='+info.selectionText+''});
        }


        if (info.menuItemId === "neeva"){
      chrome.tabs.create({url: 'https://neeva.com/search?q='+info.selectionText+'&c=All&src=typedquery'});
        }
        if (info.menuItemId === "you"){
      chrome.tabs.create({url: 'https://you.com/search?q='+info.selectionText+'&tbm=youchat&cfr=chat'});
        }
        if (info.menuItemId === "sci-hub"){
      chrome.tabs.create({url: 'https://sci-hub.hkvisa.net/'+info.pageUrl+''});
        }


        if (info.menuItemId === "malacards"){
      chrome.tabs.create({url: 'https://www.malacards.org/search/results?query='+info.selectionText+'&pageSize=25'});
        }
        if (info.menuItemId === "medicament-dz"){
      chrome.tabs.create({url: 'https://www.google.com/search?q='+info.selectionText+'+site%3Amedicament-dz.com'});
        }
        if (info.menuItemId === "drugs.com"){
      chrome.tabs.create({url: 'https://www.google.com/search?q='+info.selectionText+'+dosage+site%3Adrugs.com'});
        }
        if (info.menuItemId === "stackoverflow"){
      chrome.tabs.create({url: 'https://www.google.com/search?q='+info.selectionText+'+site%3Astackoverflow.com'});
        }
        if (info.menuItemId === "github"){
      chrome.tabs.create({url: 'https://github.com/search?q='+info.selectionText});
        }
        if (info.menuItemId === "gitlab"){
      chrome.tabs.create({url: 'https://gitlab.com/search?search='+info.selectionText+'&nav_source=navbar'});
        }
        if (info.menuItemId === "wholisticresearch"){
      chrome.tabs.create({url: 'https://wholisticresearch.com/shop/'+'?utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "pglchem"){
      chrome.tabs.create({url: 'https://pglchem.com/?s='+info.selectionText+'&post_type=product&type_aws=true'+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "nootropicsfrontline"){
      chrome.tabs.create({url: 'https://nootropicsfrontline.com/?s='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "russianmeds"){
      chrome.tabs.create({url: 'https://russianmeds.com/index.php?route=product/search&search='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "everychem"){
      chrome.tabs.create({url: 'https://everychem.com/?s='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "alphagresearch"){
      chrome.tabs.create({url: 'https://www.alphagresearch.com/search-results?q='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }


        if (info.menuItemId === "dezgo_anime"){
            chrome.tabs.create({url: 'https://dezgo.com/?query='+info.selectionText+''}, 
                function(tab) {
                    chrome.tabs.onCreated.addListener(function(tab) {
                    // do something
                    console.log("tab created")
                    });
                }
            );
        }
        if (info.menuItemId === "dezgo_upscale"){
      chrome.tabs.create({url: 'https://dezgo.com/upscale'});
        }
        if (info.menuItemId === "google_bind"){
      chrome.tabs.create({url: 'https://www.google.com/search?q='+info.selectionText+'+%22IC50%22+OR+%22EC50%22+OR+%22ki%22'});
        }
        if (info.menuItemId === "buy-pharma"){
      chrome.tabs.create({url: 'https://www.buy-pharma.md/Products/search?keyword='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "biolabshop"){
      chrome.tabs.create({url: 'https://biolabshop.pl/module/ambjolisearch/jolisearch?s='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "trc-canada"){
      chrome.tabs.create({url: 'https://www.trc-canada.com/products-listing/?searchBox='+info.selectionText+'&type=searchResult'+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "purelifedz"){
      chrome.tabs.create({url: 'https://purelifedz.com/products/search/'+info.selectionText});
        }
        if (info.menuItemId === "haylla"){
      chrome.tabs.create({url: 'https://haylla.com/?subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&cid=815&q='+info.selectionText+'&dispatch=products.search'});
        }
        if (info.menuItemId === "iherb"){
      chrome.tabs.create({url: 'https://dz.iherb.com/search?kw='+info.selectionText});
        }


        if (info.menuItemId === "namu.wiki"){
      chrome.tabs.create({url: 'https://namu.wiki/Search?q='+info.selectionText});
        }
        if (info.menuItemId === "magpharm"){
      chrome.tabs.create({url: 'https://www.magpharm.com/index.php?page=products&pages=0&keyword='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "alldaychemist"){
      chrome.tabs.create({url: 'https://www.alldaychemist.com/catalogsearch/result/?q='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "you.random.hashtag"){
      chrome.tabs.create({url: 'https://you.com/search?q=give+me+30+random+hashtag+for+Instagram+about+%22'+info.selectionText+'%22&fromSearchBar=true&tbm=youchat'});
        }
        if (info.menuItemId === "jsdelivr"){
      chrome.tabs.create({url: 'https://www.jsdelivr.com/github'});
        }
        if (info.menuItemId === "jsdelivr-purge"){
      chrome.tabs.create({url: 'https://www.jsdelivr.com/tools/purge'});
        }

    }

});






