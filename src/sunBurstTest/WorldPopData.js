let chartData = [{id: 'theworld', parent: '', name: 'TheWorld'}, {id: 'asia', parent: 'theworld', name: 'Asia'}, {id: 'africa', parent: 'theworld', name: 'Africa'}, {id: 'america', parent: 'theworld', name: 'America'}, {id: 'europe', parent: 'theworld', name: 'Europe'}, {id: 'oceania', parent: 'theworld', name: 'Oceania'}, {id: 'easternafrica', parent: 'africa', name: 'EasternAfrica'}, {id: 'ethiopia', parent: 'easternafrica', name: 'Ethiopia', value: 104957438}, {id: 'tanzania', parent: 'easternafrica', name: 'Tanzania', value: 57310019}, {id: 'kenya', parent: 'easternafrica', name: 'Kenya', value: 49699862}, {id: 'uganda', parent: 'easternafrica', name: 'Uganda', value: 42862958}, {id: 'mozambique', parent: 'easternafrica', name: 'Mozambique', value: 29668834}, {id: 'madagascar', parent: 'easternafrica', name: 'Madagascar', value: 25570895}, {id: 'malawi', parent: 'easternafrica', name: 'Malawi', value: 18622104}, {id: 'zambia', parent: 'easternafrica', name: 'Zambia', value: 17094130}, {id: 'zimbabwe', parent: 'easternafrica', name: 'Zimbabwe', value: 16529904}, {id: 'somalia', parent: 'easternafrica', name: 'Somalia', value: 14742523}, {id: 'southsudan', parent: 'easternafrica', name: 'SouthSudan', value: 12575714}, {id: 'rwanda', parent: 'easternafrica', name: 'Rwanda', value: 12208407}, {id: 'burundi', parent: 'easternafrica', name: 'Burundi', value: 10864245}, {id: 'eritrea', parent: 'easternafrica', name: 'Eritrea', value: 5068831}, {id: 'mauritius', parent: 'easternafrica', name: 'Mauritius', value: 1265138}, {id: 'djibouti', parent: 'easternafrica', name: 'Djibouti', value: 956985}, {id: 'runion', parent: 'easternafrica', name: 'Réunion', value: 876562}, {id: 'comoros', parent: 'easternafrica', name: 'Comoros', value: 813912}, {id: 'mayotte', parent: 'easternafrica', name: 'Mayotte', value: 253045}, {id: 'seychelles', parent: 'easternafrica', name: 'Seychelles', value: 94737}, {id: 'westernafrica', parent: 'africa', name: 'WesternAfrica'}, {id: 'nigeria', parent: 'westernafrica', name: 'Nigeria', value: 190886311}, {id: 'ghana', parent: 'westernafrica', name: 'Ghana', value: 28833629}, {id: 'cteivoire', parent: 'westernafrica', name: 'CôteIvoire', value: 24294750}, {id: 'niger', parent: 'westernafrica', name: 'Niger', value: 21477348}, {id: 'burkinafaso', parent: 'westernafrica', name: 'BurkinaFaso', value: 19193382}, {id: 'mali', parent: 'westernafrica', name: 'Mali', value: 18541980}, {id: 'senegal', parent: 'westernafrica', name: 'Senegal', value: 15850567}, {id: 'guinea', parent: 'westernafrica', name: 'Guinea', value: 12717176}, {id: 'benin', parent: 'westernafrica', name: 'Benin', value: 11175692}, {id: 'togo', parent: 'westernafrica', name: 'Togo', value: 7797694}, {id: 'sierraleone', parent: 'westernafrica', name: 'SierraLeone', value: 7557212}, {id: 'liberia', parent: 'westernafrica', name: 'Liberia', value: 4731906}, {id: 'mauritania', parent: 'westernafrica', name: 'Mauritania', value: 4420184}, {id: 'thegambia', parent: 'westernafrica', name: 'TheGambia', value: 2100568}, {id: 'guineabissau', parent: 'westernafrica', name: 'Guinea-Bissau', value: 1861283}, {id: 'caboverde', parent: 'westernafrica', name: 'CaboVerde', value: 546388}, {id: 'sainthelenaascensionandtristandacunha', parent: 'westernafrica', name: 'SaintHelena, AscensionandTristandaCunha', value: 4049}, {id: 'northafrica', parent: 'africa', name: 'NorthAfrica'}, {id: 'egypt', parent: 'northafrica', name: 'Egypt', value: 97553151}, {id: 'algeria', parent: 'northafrica', name: 'Algeria', value: 41318142}, {id: 'sudan', parent: 'northafrica', name: 'Sudan', value: 40533330}, {id: 'morocco', parent: 'northafrica', name: 'Morocco', value: 35739580}, {id: 'tunisia', parent: 'northafrica', name: 'Tunisia', value: 11532127}, {id: 'libya', parent: 'northafrica', name: 'Libya', value: 6374616}, {id: 'westernsahara', parent: 'northafrica', name: 'WesternSahara', value: 552628}, {id: 'centralafrica', parent: 'africa', name: 'CentralAfrica'}, {id: 'democraticrepublicofthecongo', parent: 'centralafrica', name: 'DemocraticRepublicoftheCongo', value: 81339988}, {id: 'angola', parent: 'centralafrica', name: 'Angola', value: 29784193}, {id: 'cameroon', parent: 'centralafrica', name: 'Cameroon', value: 24053727}, {id: 'chad', parent: 'centralafrica', name: 'Chad', value: 14899994}, {id: 'congo', parent: 'centralafrica', name: 'Congo', value: 5260750}, {id: 'centralafricanrepublic', parent: 'centralafrica', name: 'CentralAfricanRepublic', value: 4659080}, {id: 'gabon', parent: 'centralafrica', name: 'Gabon', value: 2025137}, {id: 'equatorialguinea', parent: 'centralafrica', name: 'EquatorialGuinea', value: 1267689}, {id: 'saotomeandprincipe', parent: 'centralafrica', name: 'SaoTomeandPrincipe', value: 204327}, {id: 'southafrica', parent: 'africa', name: 'SouthAfrica'}, {id: 'southafrica1', parent: 'southafrica', name: 'SouthAfrica', value: 56717156}, {id: 'namibia', parent: 'southafrica', name: 'Namibia', value: 2533794}, {id: 'botswana', parent: 'southafrica', name: 'Botswana', value: 2291661}, {id: 'lesotho', parent: 'southafrica', name: 'Lesotho', value: 2233339}, {id: 'swaziland', parent: 'southafrica', name: 'Swaziland', value: 1367254}, {id: 'southamerica', parent: 'america', name: 'SouthAmerica'}, {id: 'brazil', parent: 'southamerica', name: 'Brazil', value: 209288278}, {id: 'colombia', parent: 'southamerica', name: 'Colombia', value: 49065615}, {id: 'argentina', parent: 'southamerica', name: 'Argentina', value: 44271041}, {id: 'peru', parent: 'southamerica', name: 'Peru', value: 32165485}, {id: 'venezuela', parent: 'southamerica', name: 'Venezuela', value: 31977065}, {id: 'chile', parent: 'southamerica', name: 'Chile', value: 18054726}, {id: 'ecuador', parent: 'southamerica', name: 'Ecuador', value: 16624858}, {id: 'bolivia', parent: 'southamerica', name: 'Bolivia', value: 11051600}, {id: 'paraguay', parent: 'southamerica', name: 'Paraguay', value: 6811297}, {id: 'uruguay', parent: 'southamerica', name: 'Uruguay', value: 3456750}, {id: 'guyana', parent: 'southamerica', name: 'Guyana', value: 777859}, {id: 'suriname', parent: 'southamerica', name: 'Suriname', value: 563402}, {id: 'frenchguiana', parent: 'southamerica', name: 'FrenchGuiana', value: 282731}, {id: 'falklandislands', parent: 'southamerica', name: 'FalklandIslands', value: 2910}, {id: 'northernamerica', parent: 'america', name: 'NorthernAmerica'}, {id: 'unitedstates', parent: 'northernamerica', name: 'UnitedStates', value: 324459463}, {id: 'canada', parent: 'northernamerica', name: 'Canada', value: 36624199}, {id: 'bermuda', parent: 'northernamerica', name: 'Bermuda', value: 61349}, {id: 'greenland', parent: 'northernamerica', name: 'Greenland', value: 56480}, {id: 'saintpierreandmiquelon', parent: 'northernamerica', name: 'SaintPierreandMiquelon', value: 6320}, {id: 'centralamerica', parent: 'america', name: 'CentralAmerica'}, {id: 'mexico', parent: 'centralamerica', name: 'Mexico', value: 129163276}, {id: 'guatemala', parent: 'centralamerica', name: 'Guatemala', value: 16913503}, {id: 'honduras', parent: 'centralamerica', name: 'Honduras', value: 9265067}, {id: 'elsalvador', parent: 'centralamerica', name: 'ElSalvador', value: 6377853}, {id: 'nicaragua', parent: 'centralamerica', name: 'Nicaragua', value: 6217581}, {id: 'costarica', parent: 'centralamerica', name: 'CostaRica', value: 4905769}, {id: 'panama', parent: 'centralamerica', name: 'Panama', value: 4098587}, {id: 'belize', parent: 'centralamerica', name: 'Belize', value: 374681}, {id: 'caribbean', parent: 'america', name: 'Caribbean'}, {id: 'cuba', parent: 'caribbean', name: 'Cuba', value: 11484636}, {id: 'haiti', parent: 'caribbean', name: 'Haiti', value: 10981229}, {id: 'dominicanrepublic', parent: 'caribbean', name: 'DominicanRepublic', value: 10766998}, {id: 'puertorico', parent: 'caribbean', name: 'PuertoRico', value: 3663131}, {id: 'jamaica', parent: 'caribbean', name: 'Jamaica', value: 2890299}, {id: 'trinidadandtobago', parent: 'caribbean', name: 'TrinidadandTobago', value: 1369125}, {id: 'guadeloupe', parent: 'caribbean', name: 'Guadeloupe', value: 449568}, {id: 'bahamas', parent: 'caribbean', name: 'Bahamas', value: 395361}, {id: 'martinique', parent: 'caribbean', name: 'Martinique', value: 384896}, {id: 'barbados', parent: 'caribbean', name: 'Barbados', value: 285719}, {id: 'saintlucia', parent: 'caribbean', name: 'SaintLucia', value: 178844}, {id: 'curaao', parent: 'caribbean', name: 'Curaçao', value: 160539}, {id: 'saintvincentandthegrenadines', parent: 'caribbean', name: 'SaintVincentandtheGrenadines', value: 109897}, {id: 'grenada', parent: 'caribbean', name: 'Grenada', value: 107825}, {id: 'aruba', parent: 'caribbean', name: 'Aruba', value: 105264}, {id: 'unitedstatesvirginislands', parent: 'caribbean', name: 'UnitedStatesVirginIslands', value: 104901}, {id: 'antiguaandbarbuda', parent: 'caribbean', name: 'AntiguaandBarbuda', value: 102012}, {id: 'dominica', parent: 'caribbean', name: 'Dominica', value: 73925}, {id: 'caymanislands', parent: 'caribbean', name: 'CaymanIslands', value: 61559}, {id: 'saintkittsandnevis', parent: 'caribbean', name: 'SaintKittsandNevis', value: 55345}, {id: 'sintmaarten', parent: 'caribbean', name: 'SintMaarten', value: 40120}, {id: 'turksandcaicosislands', parent: 'caribbean', name: 'TurksandCaicosIslands', value: 35446}, {id: 'britishvirginislands', parent: 'caribbean', name: 'BritishVirginIslands', value: 31196}, {id: 'caribbeannetherlands', parent: 'caribbean', name: 'CaribbeanNetherlands', value: 25398}, {id: 'anguilla', parent: 'caribbean', name: 'Anguilla', value: 14909}, {id: 'montserrat', parent: 'caribbean', name: 'Montserrat', value: 5177}, {id: 'southernasia', parent: 'asia', name: 'SouthernAsia'}, {id: 'india', parent: 'southernasia', name: 'India', value: 1339180127}, {id: 'pakistan', parent: 'southernasia', name: 'Pakistan', value: 197015955}, {id: 'bangladesh', parent: 'southernasia', name: 'Bangladesh', value: 164669751}, {id: 'iran', parent: 'southernasia', name: 'Iran', value: 81162788}, {id: 'afghanistan', parent: 'southernasia', name: 'Afghanistan', value: 35530081}, {id: 'nepal', parent: 'southernasia', name: 'Nepal', value: 29304998}, {id: 'srilanka', parent: 'southernasia', name: 'SriLanka', value: 20876917}, {id: 'bhutan', parent: 'southernasia', name: 'Bhutan', value: 807610}, {id: 'maldives', parent: 'southernasia', name: 'Maldives', value: 436330}, {id: 'easternasia', parent: 'asia', name: 'EasternAsia'}, {id: 'china', parent: 'easternasia', name: 'China', value: 1409517397}, {id: 'japan', parent: 'easternasia', name: 'Japan', value: 127484450}, {id: 'southkorea', parent: 'easternasia', name: 'SouthKorea', value: 50982212}, {id: 'northkorea', parent: 'easternasia', name: 'NorthKorea', value: 25490965}, {id: 'taiwan', parent: 'easternasia', name: 'Taiwan', value: 23626456}, {id: 'hongkong', parent: 'easternasia', name: 'HongKong', value: 7364883}, {id: 'mongolia', parent: 'easternasia', name: 'Mongolia', value: 3075647}, {id: 'macau', parent: 'easternasia', name: 'Macau', value: 622567}, {id: 'southeasternasia', parent: 'asia', name: 'South-EasternAsia'}, {id: 'indonesia', parent: 'southeasternasia', name: 'Indonesia', value: 263991379}, {id: 'philippines', parent: 'southeasternasia', name: 'Philippines', value: 104918090}, {id: 'vietnam', parent: 'southeasternasia', name: 'Vietnam', value: 95540800}, {id: 'thailand', parent: 'southeasternasia', name: 'Thailand', value: 69037513}, {id: 'myanmar', parent: 'southeasternasia', name: 'Myanmar', value: 53370609}, {id: 'malaysia', parent: 'southeasternasia', name: 'Malaysia', value: 31624264}, {id: 'cambodia', parent: 'southeasternasia', name: 'Cambodia', value: 16005373}, {id: 'laos', parent: 'southeasternasia', name: 'Laos', value: 6858160}, {id: 'singapore', parent: 'southeasternasia', name: 'Singapore', value: 5708844}, {id: 'timorleste', parent: 'southeasternasia', name: 'Timor-Leste', value: 1296311}, {id: 'brunei', parent: 'southeasternasia', name: 'Brunei', value: 428697}, {id: 'westernasia', parent: 'asia', name: 'WesternAsia'}, {id: 'turkey', parent: 'westernasia', name: 'Turkey', value: 80745020}, {id: 'iraq', parent: 'westernasia', name: 'Iraq', value: 38274618}, {id: 'saudiarabia', parent: 'westernasia', name: 'SaudiArabia', value: 32938213}, {id: 'yemen', parent: 'westernasia', name: 'Yemen', value: 28250420}, {id: 'syria', parent: 'westernasia', name: 'Syria', value: 18269868}, {id: 'azerbaijan', parent: 'westernasia', name: 'Azerbaijan', value: 9827589}, {id: 'jordan', parent: 'westernasia', name: 'Jordan', value: 9702353}, {id: 'unitedarabemirates', parent: 'westernasia', name: 'UnitedArabEmirates', value: 9400145}, {id: 'israel', parent: 'westernasia', name: 'Israel', value: 8321570}, {id: 'lebanon', parent: 'westernasia', name: 'Lebanon', value: 6082357}, {id: 'palestine', parent: 'westernasia', name: 'Palestine', value: 4920724}, {id: 'oman', parent: 'westernasia', name: 'Oman', value: 4636262}, {id: 'kuwait', parent: 'westernasia', name: 'Kuwait', value: 4136528}, {id: 'georgia', parent: 'westernasia', name: 'Georgia', value: 3912061}, {id: 'armenia', parent: 'westernasia', name: 'Armenia', value: 2930450}, {id: 'qatar', parent: 'westernasia', name: 'Qatar', value: 2639211}, {id: 'bahrain', parent: 'westernasia', name: 'Bahrain', value: 1492584}, {id: 'centralasia', parent: 'asia', name: 'CentralAsia'}, {id: 'uzbekistan', parent: 'centralasia', name: 'Uzbekistan', value: 31910641}, {id: 'kazakhstan', parent: 'centralasia', name: 'Kazakhstan', value: 18204499}, {id: 'tajikistan', parent: 'centralasia', name: 'Tajikistan', value: 8921343}, {id: 'kyrgyzstan', parent: 'centralasia', name: 'Kyrgyzstan', value: 6045117}, {id: 'turkmenistan', parent: 'centralasia', name: 'Turkmenistan', value: 5758075}, {id: 'easterneurope', parent: 'europe', name: 'EasternEurope'}, {id: 'russia', parent: 'easterneurope', name: 'Russia', value: 143989754}, {id: 'ukraine', parent: 'easterneurope', name: 'Ukraine', value: 44222947}, {id: 'poland', parent: 'easterneurope', name: 'Poland', value: 38170712}, {id: 'romania', parent: 'easterneurope', name: 'Romania', value: 19679306}, {id: 'czechia', parent: 'easterneurope', name: 'Czechia', value: 10618303}, {id: 'hungary', parent: 'easterneurope', name: 'Hungary', value: 9721559}, {id: 'belarus', parent: 'easterneurope', name: 'Belarus', value: 9468338}, {id: 'bulgaria', parent: 'easterneurope', name: 'Bulgaria', value: 7084571}, {id: 'slovakia', parent: 'easterneurope', name: 'Slovakia', value: 5447662}, {id: 'moldova', parent: 'easterneurope', name: 'Moldova', value: 4051212}, {id: 'cyprus', parent: 'easterneurope', name: 'Cyprus', value: 1179551}, {id: 'northerneurope', parent: 'europe', name: 'NorthernEurope'}, {id: 'unitedkingdom', parent: 'northerneurope', name: 'UnitedKingdom', value: 66181585}, {id: 'sweden', parent: 'northerneurope', name: 'Sweden', value: 9910701}, {id: 'denmark', parent: 'northerneurope', name: 'Denmark', value: 5733551}, {id: 'finland', parent: 'northerneurope', name: 'Finland', value: 5523231}, {id: 'norway', parent: 'northerneurope', name: 'Norway', value: 5305383}, {id: 'ireland', parent: 'northerneurope', name: 'Ireland', value: 4761657}, {id: 'lithuania', parent: 'northerneurope', name: 'Lithuania', value: 2890297}, {id: 'latvia', parent: 'northerneurope', name: 'Latvia', value: 1949670}, {id: 'estonia', parent: 'northerneurope', name: 'Estonia', value: 1309632}, {id: 'iceland', parent: 'northerneurope', name: 'Iceland', value: 335025}, {id: 'guernseyandjersey', parent: 'northerneurope', name: 'GuernseyandJersey', value: 165314}, {id: 'isleofman', parent: 'northerneurope', name: 'IsleofMan', value: 84287}, {id: 'faroeislands', parent: 'northerneurope', name: 'FaroeIslands', value: 49290}, {id: 'southerneurope', parent: 'europe', name: 'SouthernEurope'}, {id: 'italy', parent: 'southerneurope', name: 'Italy', value: 59359900}, {id: 'spain', parent: 'southerneurope', name: 'Spain', value: 46354321}, {id: 'greece', parent: 'southerneurope', name: 'Greece', value: 11159773}, {id: 'portugal', parent: 'southerneurope', name: 'Portugal', value: 10329506}, {id: 'serbia', parent: 'southerneurope', name: 'Serbia', value: 8790574}, {id: 'croatia', parent: 'southerneurope', name: 'Croatia', value: 4189353}, {id: 'bosniaandherzegovina', parent: 'southerneurope', name: 'BosniaandHerzegovina', value: 3507017}, {id: 'albania', parent: 'southerneurope', name: 'Albania', value: 2930187}, {id: 'republicofmacedonia', parent: 'southerneurope', name: 'RepublicofMacedonia', value: 2083160}, {id: 'slovenia', parent: 'southerneurope', name: 'Slovenia', value: 2079976}, {id: 'montenegro', parent: 'southerneurope', name: 'Montenegro', value: 628960}, {id: 'malta', parent: 'southerneurope', name: 'Malta', value: 430835}, {id: 'andorra', parent: 'southerneurope', name: 'Andorra', value: 76965}, {id: 'gibraltar', parent: 'southerneurope', name: 'Gibraltar', value: 34571}, {id: 'sanmarino', parent: 'southerneurope', name: 'SanMarino', value: 33400}, {id: 'vaticancity', parent: 'southerneurope', name: 'VaticanCity', value: 792}, {id: 'westerneurope', parent: 'europe', name: 'WesternEurope'}, {id: 'germany', parent: 'westerneurope', name: 'Germany', value: 82114224}, {id: 'france', parent: 'westerneurope', name: 'France', value: 64979548}, {id: 'netherlands', parent: 'westerneurope', name: 'Netherlands', value: 17035938}, {id: 'belgium', parent: 'westerneurope', name: 'Belgium', value: 11429336}, {id: 'austria', parent: 'westerneurope', name: 'Austria', value: 8735453}, {id: 'switzerland', parent: 'westerneurope', name: 'Switzerland', value: 8476005}, {id: 'luxembourg', parent: 'westerneurope', name: 'Luxembourg', value: 583455}, {id: 'monaco', parent: 'westerneurope', name: 'Monaco', value: 38695}, {id: 'liechtenstein', parent: 'westerneurope', name: 'Liechtenstein', value: 37922}, {id: 'australiaandnewzealand', parent: 'oceania', name: 'AustraliaandNewZealand'}, {id: 'australia', parent: 'australiaandnewzealand', name: 'Australia', value: 24450561}, {id: 'newzealand', parent: 'australiaandnewzealand', name: 'NewZealand', value: 4705818}, {id: 'melanesia', parent: 'oceania', name: 'Melanesia'}, {id: 'papuanewguinea', parent: 'melanesia', name: 'PapuaNewGuinea', value: 6703273}, {id: 'fiji', parent: 'melanesia', name: 'Fiji', value: 905502}, {id: 'solomonislands', parent: 'melanesia', name: 'SolomonIslands', value: 611343}, {id: 'newcaledonia', parent: 'melanesia', name: 'NewCaledonia', value: 276255}, {id: 'vanuatu', parent: 'melanesia', name: 'Vanuatu', value: 276244}, {id: 'micronesia', parent: 'oceania', name: 'Micronesia'}, {id: 'guam', parent: 'micronesia', name: 'Guam', value: 164229}, {id: 'kiribati', parent: 'micronesia', name: 'Kiribati', value: 116398}, {id: 'federatedstatesofmicronesia', parent: 'micronesia', name: 'FederatedStatesofMicronesia', value: 105544}, {id: 'northernmarianaislands', parent: 'micronesia', name: 'NorthernMarianaIslands', value: 55144}, {id: 'marshallislands', parent: 'micronesia', name: 'MarshallIslands', value: 53127}, {id: 'palau', parent: 'micronesia', name: 'Palau', value: 21729}, {id: 'nauru', parent: 'micronesia', name: 'Nauru', value: 11359}, {id: 'polynesia', parent: 'oceania', name: 'Polynesia'}, {id: 'frenchpolynesia', parent: 'polynesia', name: 'FrenchPolynesia', value: 283007}, {id: 'samoa', parent: 'polynesia', name: 'Samoa', value: 196440}, {id: 'tonga', parent: 'polynesia', name: 'Tonga', value: 108020}, {id: 'americansamoa', parent: 'polynesia', name: 'AmericanSamoa', value: 55641}, {id: 'cookislands', parent: 'polynesia', name: 'CookIslands', value: 17380}, {id: 'wallisandfutuna', parent: 'polynesia', name: 'WallisandFutuna', value: 11773}, {id: 'tuvalu', parent: 'polynesia', name: 'Tuvalu', value: 11192}, {id: 'niue', parent: 'polynesia', name: 'Niue', value: 1618}, {id: 'tokelau', parent: 'polynesia', name: 'Tokelau', value: 1300}];


export default chartData