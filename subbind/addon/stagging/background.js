chrome.action.onClicked.addListener(function(tab) {
      chrome.tabs.create({url: 'https://www.biotune.org/p/subbind.html'});
});



chrome.contextMenus.create({
  "id":"RCD",
  "title" : "find %s in receptors concept db",
  "type" : "normal",
  "contexts" : ["all"]
});
chrome.contextMenus.create({
  "id":"parent",
  "title" : "find binding for %s",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"GTP",
  "title" : "search in guidetopharmacology",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"europepmc",
  "title" : "search in europepmc [ML]",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"springernature",
  "title" : "search in springernature [ML]",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"biomedcentral",
  "title" : "search in biomedcentral [ML]",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"portlandpress",
  "title" : "search in portlandpress [ML]",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"medscape",
  "title" : "search in medscape [ML]",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"drugbank",
  "title" : "search in drugbank",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"psychonautwiki",
  "title" : "search in psychonautwiki",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"erowid",
  "title" : "search in erowid",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"thedrugclassroom",
  "title" : "search in thedrugclassroom",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"nootropicsindex",
  "title" : "search in nootropicsindex",
  "type" : "normal",
  "contexts" : ["selection"]
});
chrome.contextMenus.create({
  "id":"v1.9.5+",
  "title" : "v1.9.5+",
  "contexts" : ["all"]
});



chrome.contextMenus.create({
  "id":"neeva",
  "title" : "search in neeva [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.5+"
});
chrome.contextMenus.create({
  "id":"you",
  "title" : "ask youchat [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.5+"
});
chrome.contextMenus.create({
  "id":"sci-hub",
  "title" : "find this article on sci-hub",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.5+"
});
chrome.contextMenus.create({
  "id":"v1.9.6+",
  "title" : "v1.9.6+",
  "contexts" : ["all"],
  "parentId": "v1.9.5+"
});



chrome.contextMenus.create({
  "id":"malacards",
  "title" : "search for %s in malacards [gene]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"medicament-dz",
  "title" : "search for %s in medicament-dz [dork]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"drugs.com",
  "title" : "search for dosage of %s in drugs.com [dork]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"stackoverflow",
  "title" : "search for %s in stackoverflow.com [coding]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"github",
  "title" : "search in github for %s [coding]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"gitlab",
  "title" : "search in gitlab for %s [coding]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"wholisticresearch",
  "title" : "go to wholisticresearch [ven]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"pglchem",
  "title" : "search in pglchem for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"nootropicsfrontline",
  "title" : "search in nootropicsfrontline for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"russianmeds",
  "title" : "search in russianmeds for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"everychem",
  "title" : "search in everychem for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
});
chrome.contextMenus.create({
  "id":"alphagresearch",
  "title" : "search in alphagresearch for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.6+"
}); 
chrome.contextMenus.create({
  "id":"v1.9.7+",
  "title" : "v1.9.7+",
  "contexts" : ["all"],
  "parentId": "v1.9.6+"
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
  "parentId": "v1.9.7+"
});
chrome.contextMenus.create({
  "id":"buy-pharma",
  "title" : "search in buy-pharma for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+"
});
chrome.contextMenus.create({
  "id":"biolabshop",
  "title" : "search in biolabshop for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+"
});
chrome.contextMenus.create({
  "id":"trc-canada",
  "title" : "search in trc-canada for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+"
});
chrome.contextMenus.create({
  "id":"purelifedz",
  "title" : "search in purelifedz for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+"
});
chrome.contextMenus.create({
  "id":"haylla",
  "title" : "search in haylla for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+"
});
chrome.contextMenus.create({
  "id":"iherb",
  "title" : "search in iherb for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.7+"
}); 
chrome.contextMenus.create({
  "id":"v1.9.8+",
  "title" : "v1.9.8+",
  "contexts" : ["all"],
  "parentId": "v1.9.7+"
});











chrome.contextMenus.create({
  "id":"namu.wiki",
  "title" : "search in namu.wiki for %s",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"magpharm",
  "title" : "search in magpharm for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"alldaychemist",
  "title" : "search in alldaychemist for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"you.random.hashtag",
  "title" : "ganerate hashtag for %s [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"jsdelivr",
  "title" : "go to jsdelivr [coding]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"jsdelivr-purge",
  "title" : "go to jsdelivr purge [coding]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"stemcell",
  "title" : "search in stemcell for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
}); 
chrome.contextMenus.create({
  "id":"arxiv",
  "title" : "search in arxiv for %s",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
}); 
chrome.contextMenus.create({
  "id":"githack",
  "title" : "go to githack [coding]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.8+"
});
chrome.contextMenus.create({
  "id":"mobilism",
  "title" : "search in mobilism for %s",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
}); 
chrome.contextMenus.create({
  "id":"akipharma",
  "title" : "search in akipharma for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.8+"
}); 
chrome.contextMenus.create({
  "id":"v1.9.9+",
  "title" : "v1.9.9+",
  "contexts" : ["all"],
  "parentId": "v1.9.8+"
});



chrome.contextMenus.create({
  "id":"atlas-filters",
  "title" : "keyword filter [bot]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"buddylist",
  "title" : "facebook active friends [helper]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"thebiogrid",
  "title" : "find binding for %s in BioGRID",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.9+"
});
/*chrome.contextMenus.create({
  "id":"1000nm",
  "title" : "from those who have >1000nm ki/IC50/EC50 to %receptor% : %SubstancesList% [AI]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.9+"
}); */
chrome.contextMenus.create({
  "id":"msdark",
  "title" : "go to msdark [ven]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"jglobal",
  "title" : "search in jglobal [JP]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"bgpharma",
  "title" : "search in bgpharma for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"liftmode",
  "title" : "search in liftmode for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"cosmicnootropic",
  "title" : "go to cosmicnootropic [ven]",
  "type" : "normal",
  "contexts" : ["all"],
  "parentId": "v1.9.9+"
});
chrome.contextMenus.create({
  "id":"nootropicsbase",
  "title" : "search in nootropicsbase for %s [ven]",
  "type" : "normal",
  "contexts" : ["selection"],
  "parentId": "v1.9.9+"
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
https://wholisticresearch.com/shop/ [trust=bookmark/rare-nootropic-store]
https://pglchem.com/?s=Bromantane&post_type=product&type_aws=true [trust=bookmark/rare-nootropic-store]
https://nootropicsfrontline.com/?s=NSI [trust=bookmark/rare-nootropic-store]
https://russianmeds.com/index.php?route=product/search&search=Sulbutiamine
https://everychem.com/?s=Bromantane [trust=sirsad-own]
https://www.alphagresearch.com/search-results?q=Tesemorelin  [trust=bookmark/noot3.0]

v1.9.7+
https://dezgo.com/ anything 3.0 (anime)
https://dezgo.com/upscale
https://www.google.com/search?q=salicin+%22IC50%22+OR+%22EC50%22+OR+%22ki%22
source:https://boards.4channel.org/fit/thread/69921476/nsg-nootssupplements-general
https://www.buy-pharma.md/Products/search?keyword=care [blank https://chat.nootropicsrebirth.com/channel/a-casual-chat?msg=85dMpn77iDXhwxvfd]
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

v1.9.8+
https://namu.wiki/Search?q=care
https://www.magpharm.com/index.php?page=products&pages=0&keyword=care
https://www.alldaychemist.com/catalogsearch/result/?q=care [trusted by=someone in reddit]
https://you.com/search?q=give+me+30+random+hashtag+for+Instagram+about+%22care%22&fromSearchBar=true&tbm=youchat
https://www.jsdelivr.com/github
https://www.jsdelivr.com/tools/purge
https://www.stemcell.com/catalogsearch/result/index/?q=ABT-263&category_option=Products
https://arxiv.org/search/q-bio?query=modafinil&searchtype=all&abstracts=show&order=-announced_date_first&size=50
https://www.importyeti.com/
https://raw.githack.com/
https://forum.mobilism.org/search.php?keywords=Care&terms=all&author=&sc=1&sf=titleonly&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&sid=ad07ce103f263e3baad3db6e5098b5c5&submit=Search
https://www.akipharma.com/product_search.html?search-field=tadalafil (promoted by part-time american https://discord.com/channels/1001420842179239936/1019700999016939530/1085323742865002526)

v1.9.9+
######################
## AI dork research ##
######################
"pseudoephedrine" "IC50" OR "EC50" OR "ki" binding list sorted

"any of those substances have affinity to : "+SubstancesList  ##############
.then(Substances+"OX1" "IC50" OR "EC50" OR "ki")              ## outdated ##
                                                              ##############

"give me from those substances who have 1000nm ki, IC50 , EC50 and potent to "+alpha2a adrenergic receptors+" : "+SubstancesList
$.expeceted("
Clonidine: Kd = 0.18 nM
Dexchlorpheniramine: IC50 = 15 nM
Betaxolol: IC50 = 77 nM
Nebivolol: IC50 = 112 nM
Atenolol: IC50 = 181 nM
Metoprolol: IC50 = 1.7 μM
Timolol: IC50 = 28 μM
")




######################
##       insta      ##
######################
add to hashtage search:
"with this sentence in first: ˡⁱᵏᵉᵈ ᵐʸ ᶜᵒⁿᵗᵉⁿᵗ ᶠᵒˡˡᵒʷ ᵐᵉ ❤
ꜱᴘᴇᴄɪᴀʟ ᴛᴀɢ :
🆈🅾🆄 🅲🅰🅽 🅳🅼 🅼🅴 🅸🅵 🆈🅾🆄 🅷🅰🆅🅴 🅰🅽🆈 🅿🆁🅾🅱🅻🅴🅼!! 🅻🅾🆅🅴🅻🆈  
" + hashtageslist
###########


## current description :
**ᔆᵘᵖᵉʳⁱᵒʳⁱᵗʸ ˢᵗᵘᶠᶠ ⁱˢ ʷʰᵃᵗ ʷᵉ ᵗᵃˡᵏⁱⁿᵍ ᵃᵇᵒᵘᵗ ʰᵉʳᵉ**
ʷᵉˡᶜᵒᵐᵉ ᵗᵒ ᵐʸ ᶜᵘᵗᵉ/ᵃᵍᵍʳᵉˢˢⁱᵛᵉ⁻ˢᵉˣʸ ⁱⁿˢᵗᵃ‧


## post tage generally used:
#mamamoo_starrynight #blitzy #itzyfacts #halterofiliaespaña #itzyaesthetic #mamamooegotistic #itzyvideo #resinaespaña #mamamoofashion #nuevaesparta_estrella #vidanaespanha #twicelightsinmanila #aespawts #blackpinkbr #pdae_perrodeaguaespañol #blackpink2ndanniversary #mamamoo週邊 #itzyofficial #faktaitzy #itzyritzyinsiders #mamamoogogobebe #itzydebut #mananaesparasiempre #twiceph #itzy_icy #intags #viaespana #meridaespaña #gramaticaespañola #itzy_debut

V2.0
1_make global a list hashtages, have low engagement, high followers.

2_Make an enargyzic,cute, sexy, superior content account, buy leeshing good creators.
++add global hashtags with their.

3_Follow korean hashtag 

4_follow 50/d likers of feed posts from that hashtags for 7d

5_randomly like ~50  likers of hatshtags feed in the day.

6_unfollow them.

Strategy done:
-Likers engagement.
-normal people will triggered BC your quality so follows you instantly
_hit 100act/d from 250(2022-5)-319limit
_you unfollow before follow in daily practise.
_global hashtag+their

### USED TAGS LIST ###
[in tags, rare=>sometimes, waveya blackpink twice mamamoo aespa itzy]:
#mamamoo_starrynight #blitzy #itzyfacts #halterofiliaespaña #itzyaesthetic #mamamooegotistic #itzyvideo #resinaespaña #mamamoofashion #nuevaesparta_estrella #vidanaespanha #twicelightsinmanila #aespawts #blackpinkbr #pdae_perrodeaguaespañol #blackpink2ndanniversary #mamamoo週邊 #itzyofficial #faktaitzy #itzyritzyinsiders #mamamoogogobebe #itzydebut #mananaesparasiempre #twiceph #itzy_icy #intags #viaespana #meridaespaña #gramaticaespañola #itzy_debut

[unk source] performed = 71 like
#omg #omgpage #boobs #omgpageedit #omgedit #omgpageedits #omgvoices #boobsofinstagram #boobsgram #omgspn #omgirl #omgunderratededit #omgturkish #boobsqueeze #omgeditpage #omgpageunderrated #omgscouting #omgexplore #omgshoes #boobslove #customgift #aomg #hotboobs #bathroomgoals #choibeomgyu #momgoals #omgedits #beomgyu #omgunderrated #bomgosto

[in tags, rare=>always, waveya blackpink twice mamamoo aespa itzy] preformed ~10 likes.
#mamamoomoonbyul #blackpinkedit #mamamoo #mamamoobrasil #waveyastyle #twicejihyo #mamamoobilgileri #twicedahyun #blackpinkjennie #twicemomo #gastronomiaespañola #nuevaesparta #blackpinkedits #mamamoowheein #vivaespaña #twicenayeon #waveyafighting #aespa #blackpink2019worldtourwithkia #blackpink #blackpinkhouse #blackpinkistherevolution #itzy #twicetrade #intags #mamamoo_windflower #twice #twicemina #blackpinkinyourarea #modaespañola

###CLOSE FRIENDS###
https://instagram.com/_sun.__.lisa_?igshid=YmMyMTA2M2Y=
https://instagram.com/xoxoblackpinkz?igshid=YmMyMTA2M2Y=
https://instagram.com/aestbarbies?igshid=YmMyMTA2M2Y=
https://instagram.com/touchemistry?igshid=YmMyMTA2M2Y=
https://instagram.com/medical_lab__scientist?igshid=YmMyMTA2M2Y=
https://instagram.com/cnprettygirl_?igshid=YmMyMTA2M2Y=
https://instagram.com/nkorea.ulzzang.g?igshid=YmMyMTA2M2Y=
https://instagram.com/blackpinrks?igshid=YmMyMTA2M2Y=
https://instagram.com/hotsoyaa?igshid=YmMyMTA2M2Y=
https://instagram.com/twicexmomo?igshid=YmMyMTA2M2Y=
https://instagram.com/waveyaari?igshid=YmMyMTA2M2Y=
https://instagram.com/rynna0809?igshid=YmMyMTA2M2Y=
https://instagram.com/waveyalicious?igshid=YmMyMTA2M2Y=
https://instagram.com/blackpinkofficial?igshid=YmMyMTA2M2Y=
https://instagram.com/makeup.tutorial.asian?igshid=YmMyMTA2M2Y=
https://instagram.com/sohee_.xx?igshid=YmMyMTA2M2Y=
https://instagram.com/xeesoxee?igshid=YmMyMTA2M2Y=
https://instagram.com/blackpinkcofficial?igshid=YmMyMTA2M2Y=
https://instagram.com/twicetagram?igshid=YmMyMTA2M2Y=
https://instagram.com/roses_are_rosie?igshid=YmMyMTA2M2Y=
https://instagram.com/aespa_official?igshid=YmMyMTA2M2Y=
https://instagram.com/itzy.all.in.us?igshid=YmMyMTA2M2Y=
https://instagram.com/ryujin__itzy?igshid=YmMyMTA2M2Y=
https://instagram.com/lalalalisa_m?igshid=YmMyMTA2M2Y=
https://instagram.com/jennierubyjane?igshid=YmMyMTA2M2Y=
https://instagram.com/laceylustful?igshid=YmMyMTA2M2Y=
https://instagram.com/limam_yassmine_rezlane?igshid=YmMyMTA2M2Y=
https://instagram.com/animee.mix?igshid=YmMyMTA2M2Y=
https://instagram.com/mosaic_ark?igshid=YmMyMTA2M2Y=
https://instagram.com/llalalalisa.m?igshid=YmMyMTA2M2Y=
https://instagram.com/waveyafanpage2011?igshid=YmMyMTA2M2Y=
https://instagram.com/waveyamiufanpage?igshid=YmMyMTA2M2Y=
https://instagram.com/waveyaari__?igshid=YmMyMTA2M2Y=
https://instagram.com/blackstar_liquid?igshid=YmMyMTA2M2Y=
https://instagram.com/arkemist_?igshid=YmMyMTA2M2Y=
https://instagram.com/8528.sami?igshid=YmMyMTA2M2Y=
https://instagram.com/chkoupitv?igshid=YmMyMTA2M2Y=
https://instagram.com/roseblinkse?igshid=YmMyMTA2M2Y=
https://instagram.com/lisablackipnks?igshid=YmMyMTA2M2Y=
https://instagram.com/jennie.with?igshid=YmMyMTA2M2Y=
https://instagram.com/lisablackpienks?igshid=YmMyMTA2M2Y=
https://instagram.com/jenniesuby?igshid=YmMyMTA2M2Y=
https://instagram.com/waveyamiu?igshid=YmMyMTA2M2Y=

Hassan don't follow:
https://instagram.com/8528.sami?igshid=YmMyMTA2M2Y=

insta end //
https://atlas.bot/guilds/1001420842179239936/plugins/moderation/filters [implemented]
https://m.facebook.com/buddylist.php [implemented]

###############################################################################################################################################################
##### EXCELED          #####        trusted by                                       free int shipping for over (usd)    int shipping price(usd)    accept btc#
pharmshopworld.com                  http://levekunst.com/blogs/wp/ibogaine.php                                                                                #
chemical-collective.com             https://www.bluelight.org/xf/conversations/hi.1471559/#convMessage-1543427                                                #
https://neev-labs.com/              https://www.bluelight.org/xf/conversations/hi.1471559/#convMessage-1543452                                                #
https://www.smokeyschemsite.com/    https://www.bluelight.org/xf/conversations/hi.1471559/#convMessage-1543452                                                #
nootropicsource.com                 nootropicsindex.com                              150                                                            yes       #
nootropicsdepot.com                                                                                                                                           #
www.nootroponaut.com                                                                 200                                                                      #
www.biohackerslab.com                                                                                                    9,95                                 #
www.brainzyme.com                                                                    52.12                               pre-backaged supplement              #
#info: you migh not able to buy drugs in algeria due to it's stringent import regulations                                                                     #
>>https://modafinil.org/buy-modafinil-bitcoin/                                                                                                                #
you can use reshipping service from 🇬🇧 the UK such as Skypax to try to avoid stringent customs                                                                 #
>>https://modafinilxl.com/shipping/                                                                                                                           #
###############################################################################################################################################################


https://www.facebook.com/marketplace/category/search?query=
https://www.aatbio.com/search?query=ht2a%20 (resources)
https://www.msdark.com/search?options%5Bprefix%5D=none&options%5Bunavailable_products%5D=last&page=4&q=top%2A&type=product (dz) [implemented]

##################
## song writing ##
##################
"i'm trying to make a soung :
i made this lyrics , its based on my personality and feeling"
the song is based on "+ORIGINAL SONG+"
try to compelet the lyrics:"
+MYSTUB+"
xxx xxx xx xxx xxx xxx xx"

.then("give me alot of examples try to not change the lyrics i putted just add and fill xxx")

$.expeceted("
I fought the monster against my own self But I couldn’t win and I cried for help And people think I’m not crazy, I’m not crazy

I fought the monster against my own self But it took control and I lost myself And people think I’m not crazy, I’m not crazy

I fought the monster against my own self But it broke me down and I felt like hell And people think I’m not crazy, I’m not crazy
")


https://jglobal.jst.go.jp/en [implemented]
Interaction data
https://thebiogrid.org/chemsearch.php?chemSearch=modafinil  [implemented]

https://www.bgpharmadrugs.com/?s=modafinil&post_type=product [pax fav] 
https://liftmode.com/search-page/?search=kanna [trust=jc denton/bio-tolerance cast/veganserver https://discord.com/channels/1001420842179239936/1001422942380511286/1119531891217944627]
https://cosmicnootropic.com/product-category/all/?orderby=price&product_count=-1&product_view=grid + https://nootropicsbase.com/?s=modafinil [trust=jc denton/pms, and ive seen it before edit1:free int shipping for over (usd)=150]

https://scholar.kyobobook.co.kr/article/detail/4010024529153 [korean scholarship found by vegan/biohax]
https://synapse.koreamed.org/articles/1019870  [other korean scholarship found by vegan/biohax]
https://vocaroo.com/ the online voice recorder
https://naturesway.com/products/ginkgold?variant=43405110935766  [trust=netizenne/veganserver(https://discord.com/channels/1011367020182376478/1011367021293879369/1124220523275096066)==> https://www.reddit.com/r/Nootropics/comments/10sednv/comment/j72wjjz/?utm_source=share&utm_medium=web2x&context=3 ++ me asking=https://discord.com/channels/1001420842179239936/1001422942380511286/1124358852574453780 got= Yeah, natures way products are good. Not the best but not bad either.]
https://www.swansonvitamins.com/q?kw=boron [trst=me asking in biot==>𝖀𝖝𝖐𝖚𝖊𝖑𝖑 paid]

https://www.bertin-bioreagent.com/pr83187/lamotrigine [binding]
https://www.geneticlifehacks.com/?s=care [blog]

15 nearest neighbours based on brain RNA expression https://www.proteinatlas.org/ENSG00000135519-KCNH3/brain 
https://www.pnas.org/action/doSearch?AllField=care [nonameusr/blank server]

Here is my running list of TRUSTED sources for nootropics herbs and research chemicals:
https://buydmaaonline.com/
https://www.nutrivitashop.com/
https://researchem.store/
https://buckylabs.com/
https://www.chemyo.com/
[adam/nemo server] https://discord.com/channels/792481404553265164/1112754378349219900/1147006367731826808

https://rcd.bio/product-category/nootropics/ [https://rcd.bio/product-category/nootropics/ anyone heard of this company? , https://discord.com/channels/962009752035008593/962009752488013834/1169251671738699816]

*/

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
        if (info.menuItemId === "stemcell"){
      chrome.tabs.create({url: 'https://www.stemcell.com/catalogsearch/result/index/?q='+info.selectionText+'&category_option=Products'});
        }
        if (info.menuItemId === "arxiv"){
      chrome.tabs.create({url: 'https://arxiv.org/search/q-bio?query='+info.selectionText+'&searchtype=all&abstracts=show&order=-announced_date_first&size=50'});
        }
        if (info.menuItemId === "githack"){
      chrome.tabs.create({url: 'https://raw.githack.com/'});
        }
        if (info.menuItemId === "mobilism"){
      chrome.tabs.create({url: 'https://forum.mobilism.org/search.php?keywords='+info.selectionText+'&terms=all&author=&sc=1&sf=titleonly&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&sid=ad07ce103f263e3baad3db6e5098b5c5&submit=Search'});
        }
        if (info.menuItemId === "akipharma"){
      chrome.tabs.create({url: 'https://www.akipharma.com/product_search.html?search-field='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }



        /* if (info.menuItemId === "1000nm"){
      chrome.tabs.create({url: 'https://you.com/search?q=give me from those substances who have 1000nm ki, IC50 , EC50 and potent to '+info.selectionText[of receptor]+' : '+info.selectionText[of SubstancesList]+'&tbm=youchat&cfr=chat'});
        } */
        if (info.menuItemId === "msdark"){
      chrome.tabs.create({url: 'https://www.msdark.com/search?options%5Bprefix%5D=none&options%5Bunavailable_products%5D=last&page=1&q=top%2A&type=product'+'?utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "atlas-filters"){
      chrome.tabs.create({url: 'https://atlas.bot/guilds/1001420842179239936/plugins/moderation/filters'});
        }
        if (info.menuItemId === "buddylist"){
      chrome.tabs.create({url: 'https://m.facebook.com/buddylist.php'});
        }
       if (info.menuItemId === "jglobal"){
      chrome.tabs.create({url: 'https://jglobal.jst.go.jp/en/search/anythings#%7B%22category%22%3A%220%22%2C%22keyword%22%3A%22'+info.selectionText+'%22%7D'});
        }
        if (info.menuItemId === "thebiogrid"){
      chrome.tabs.create({url: 'https://thebiogrid.org/chemsearch.php?chemSearch='+info.selectionText});
        }
        if (info.menuItemId === "bgpharma"){
      chrome.tabs.create({url: 'https://www.bgpharmadrugs.com/?s='+info.selectionText+'&post_type=product&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "liftmode"){
      chrome.tabs.create({url: 'https://liftmode.com/search-page/?search='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "cosmicnootropic"){
      chrome.tabs.create({url: 'https://cosmicnootropic.com/product-category/all/?orderby=price&product_count=-1&product_view=grid'+'?utm_medium=cpc&utm_source=subbind'});
        }
        if (info.menuItemId === "nootropicsbase"){
      chrome.tabs.create({url: 'https://nootropicsbase.com/?s='+info.selectionText+'&utm_medium=cpc&utm_source=subbind'});
        }



    }

});