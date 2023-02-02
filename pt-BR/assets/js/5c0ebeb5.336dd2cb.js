"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||l;return a?r.createElement(m,c(c({ref:t},u),{},{components:a})):r.createElement(m,c({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<l;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>w,frontMatter:()=>k,metadata:()=>b,toc:()=>C});var r=a(7462),n=a(7294),l=a(3905),c=a(6010),i=a(2389),o=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",h="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:i,groupId:d,className:m}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=i??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,o.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[C,y]=(0,n.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=d){const e=b[d];null!=e&&e!==C&&v.some((t=>t.value===e))&&y(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),r=v[a].value;r!==C&&(x(t),y(r),null!=d&&N(d,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,c.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},m)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:S},l,{className:(0,c.Z)("tabs__item",h,l?.className,{"tabs__item--active":C===t})}),a??t)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function v(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,c.Z)(f,r),hidden:a},t)}const k={},g="fivepunch-character-selection",b={unversionedId:"resources/fivepunch-character-selection/index",id:"resources/fivepunch-character-selection/index",title:"fivepunch-character-selection",description:"",source:"@site/docs/resources/fivepunch-character-selection/index.md",sourceDirName:"resources/fivepunch-character-selection",slug:"/resources/fivepunch-character-selection/",permalink:"/pt-BR/resources/fivepunch-character-selection/",draft:!1,editUrl:"https://github.com/fivepunch/docs/tree/main/docs/resources/fivepunch-character-selection/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fivem-appearance",permalink:"/pt-BR/resources/fivem-appearance/"}},N={},C=[{value:"Installation",id:"installation",level:2},{value:"Download",id:"download",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"Integrating",id:"integrating",level:2},{value:"Client exports",id:"client-exports",level:2},{value:"<code>setIntoCharacterSelection()</code>",id:"setintocharacterselection",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>nextPage()</code>",id:"nextpage",level:3},{value:"Usage",id:"usage-1",level:4},{value:"<code>previousPage()</code>",id:"previouspage",level:3},{value:"Usage",id:"usage-2",level:4},{value:"<code>setSelecting()</code>",id:"setselecting",level:3},{value:"<code>flipTheBird()</code>",id:"flipthebird",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Usage",id:"usage-3",level:4},{value:"<code>deleteCharacter()</code>",id:"deletecharacter",level:3},{value:"Usage",id:"usage-4",level:4},{value:"<code>setOutOfCharacterSelection()</code>",id:"setoutofcharacterselection",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Usage",id:"usage-5",level:4},{value:"<code>Character</code>",id:"character",level:3},{value:"Properties",id:"properties",level:4},{value:"<code>MugshotBoard</code>",id:"mugshotboard",level:3},{value:"Properties",id:"properties-1",level:4},{value:"<code>onCharacterSpawn()</code>",id:"oncharacterspawn",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Usage",id:"usage-6",level:4},{value:"<code>onCharacterSelect()</code>",id:"oncharacterselect",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Usage",id:"usage-7",level:4},{value:"Common errors",id:"common-errors",level:2},{value:"Error parsing script / Failed to load script",id:"error-parsing-script--failed-to-load-script",level:3},{value:"You lack the required entitlement to use fivepunch-character-selection",id:"you-lack-the-required-entitlement-to-use-fivepunch-character-selection",level:3},{value:"Failed to verify protected resource",id:"failed-to-verify-protected-resource",level:3}],y={toc:C};function w(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fivepunch-character-selection"},"fivepunch-character-selection"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"A lore friendly character selection script for FiveM. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Embrace the spirit of Los Santos, @#$% those cute apartments.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://streamable.com/xp5vhe"},(0,l.kt)("img",{alt:"Character selection",src:a(7154).Z,width:"960",height:"540"}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"download"},"Download"),(0,l.kt)("p",null,"After the purchase you will receive an email from Tebex containing the instructions to download the resource."),(0,l.kt)("p",null,"Alternatively, you can go to ",(0,l.kt)("a",{parentName:"p",href:"https://keymaster.fivem.net/asset-grants"},"https://keymaster.fivem.net/asset-grants")," and download it."),(0,l.kt)("h3",{id:"setting-up"},"Setting up"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Extract the ",(0,l.kt)("inlineCode",{parentName:"p"},"fivepunch-character-selection.pack.zip")," file to a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"fivepunch-character-selection")," inside your resources folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the following to your ",(0,l.kt)("inlineCode",{parentName:"p"},"server.cfg")," to start the resource. Remember to start the character selection resource before the resource where you will consume it's exports."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cfg"},"ensure fivepunch-character-selection\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start developing!"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"integrating"},"Integrating"),(0,l.kt)("p",null,"By design, we don't bake framework support in our scripts. All of our creations are standalone, but they can be easily integrated with the framework of your preference."),(0,l.kt)("p",null,"Here are some examples of how to integrate this script to some of the most common frameworks in the FiveM community."),(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(v,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,l.kt)("p",null,"You can check a complete example of the fivepunch-character-selection resource using instructional buttons ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fivepunch/fivepunch-character-selection-example"},"at Fivepunch's Github"),".")),(0,l.kt)(v,{value:"qb",label:"QB",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="qb-multicharacter/client/main.lua"',title:'"qb-multicharacter/client/main.lua"'},"local QBCore = exports['qb-core']:GetCoreObject()\nlocal Selection = exports['fivepunch-character-selection']\n\nlocal cachedCharacters = {}\n\nfunction enterCharacterSelection()\n    local p = promise.new()\n\n    QBCore.Functions.TriggerCallback(\"qb-multicharacter:server:setupCharacters\", function(characters)\n        for i = 1, #characters do\n            local character = characters[i]\n\n            QBCore.Functions.TriggerCallback('qb-multicharacter:server:getSkin', function(model, data)\n                character.model = model ~= nil and tonumber(model) or 'mp_m_freemode_01'\n                character.clothing = json.decode(data)\n\n                table.insert(cachedCharacters, character)\n\n                if i == #characters then\n                    p:resolve()\n                end\n            end, character.citizenid)\n        end\n    end)\n\n    Citizen.Await(p)\n\n    local characters = {}\n\n    for k, character in pairs(cachedCharacters) do\n        table.insert(characters, {\n            identifier = character.citizenid,\n            name = character.name,\n            model = character.model,\n        })\n    end\n\n    Selection:onCharacterSpawn(function(character)\n        for k, cached in pairs(cachedCharacters) do\n            if cached.identifier == character.identifier then\n                TriggerEvent('qb-clothing:client:loadPlayerClothing', cached.clothing, character.ped)\n            end\n        end\n    end)\n\n    Selection:onCharacterSelect(function(character)\n        Selection:flipTheBird(character, function()\n            Selection:deleteCharacter(character)\n            Selection:setOutOfCharacterSelection()\n\n            for k, cached in pairs(cachedCharacters) do\n                if character.identifier == cached.citizenid then\n                    TriggerServerEvent('qb-multicharacter:server:loadUserData', cached)\n                end\n            end\n\n            cachedCharacters = {}\n        end)\n    end)\n\n    Selection:setIntoCharacterSelection(characters)\nend\n\nRegisterCommand('exit', function()\n    Selection:setOutOfCharacterSelection()\n\n    cachedCharacters = {}\nend, false)\n\nCreateThread(function()\n    while not NetworkIsSessionStarted() do\n      Wait(0)\n    end\n\n    enterCharacterSelection()\nend)\n\n"))),(0,l.kt)(v,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- To-do\nfunction helloWorld()\n  print('Hello, ESX!')\nend\n"))),(0,l.kt)(v,{value:"vrp",label:"vRP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- To-do\nfunction helloWorld()\n  print('Hello, vRP!')\nend\n")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"client-exports"},"Client exports"),(0,l.kt)("h3",{id:"setintocharacterselection"},(0,l.kt)("inlineCode",{parentName:"h3"},"setIntoCharacterSelection()")),(0,l.kt)("p",null,"Sets the player into the character selection."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="CharacterData"',title:'"CharacterData"'},"local character = { \n  identifier = 1, -- A primitive value\n  name = 'Bad Snaily', -- The string that will be displayed in the mugshot board\n  model = 'mp_m_freemode_01' -- The character ped model\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="EnterParameters (optional)"',title:'"EnterParameters','(optional)"':!0},"local parameters = {\n  transition = true, -- Enable / disable the transition to the selection screen\n  page = 0, -- The starting page of charaters that will be displayed. Max of 4 characters per page\n}\n")),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  ---@param characters A table of CharacterData\n  ---@param parameters An EnterParameters table (optional)\n  exports['fivepunch-character-selection']:setIntoCharacterSelection(characters, parameters)\n")),(0,l.kt)("h3",{id:"nextpage"},(0,l.kt)("inlineCode",{parentName:"h3"},"nextPage()")),(0,l.kt)("p",null,"Navigates to the next page of characters if available."),(0,l.kt)("h4",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  exports['fivepunch-character-selection']:nextPage()\n")),(0,l.kt)("h3",{id:"previouspage"},(0,l.kt)("inlineCode",{parentName:"h3"},"previousPage()")),(0,l.kt)("p",null,"Navigates to the next page of characters if available."),(0,l.kt)("h4",{id:"usage-2"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  exports['fivepunch-character-selection']:previousPage()\n")),(0,l.kt)("h3",{id:"setselecting"},(0,l.kt)("inlineCode",{parentName:"h3"},"setSelecting()")),(0,l.kt)("p",null,"Starts selecting a character using the mouse as input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  exports['fivepunch-character-selection']:setSelecting()\n")),(0,l.kt)("h3",{id:"flipthebird"},(0,l.kt)("inlineCode",{parentName:"h3"},"flipTheBird()")),(0,l.kt)("p",null,"Stops selecting and makes the character ped play a flip the bird animation while leaving the line up room."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Character")," ",(0,l.kt)("a",{parentName:"p",href:"#character"},"Character")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Function")," (optional)"),(0,l.kt)("h4",{id:"usage-3"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  ---@param character A Character table returned from the onCharacterSelect function\n  ---@param fn A function that is executed when the animation is completed (optional)\n  exports['fivepunch-character-selection']:flipTheBird(character, function()\n    -- Do something ...\n  end)\n")),(0,l.kt)("h3",{id:"deletecharacter"},(0,l.kt)("inlineCode",{parentName:"h3"},"deleteCharacter()")),(0,l.kt)("p",null,"Removes the specified character from the selection. No animations, just deletes the ped and removes the caracter of the characters table."),(0,l.kt)("h4",{id:"usage-4"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  ---@param character A Character table returned from the onCharacterSelect function\n  exports['fivepunch-character-selection']:deleteCharacter(character)\n")),(0,l.kt)("h3",{id:"setoutofcharacterselection"},(0,l.kt)("inlineCode",{parentName:"h3"},"setOutOfCharacterSelection()")),(0,l.kt)("p",null,"Sets the player out of the character selection"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="ExitParameters (optional)"',title:'"ExitParameters','(optional)"':!0},"local parameters = {\n  fadeIn = true, -- If false, it will not fade in the screen after the exiting transition\n}\n")),(0,l.kt)("h4",{id:"usage-5"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  ---@param parameters An ExitParameters table (optional)\n  exports['fivepunch-character-selection']:setOutOfCharacterSelection(parameters)\n")),(0,l.kt)("h3",{id:"character"},(0,l.kt)("inlineCode",{parentName:"h3"},"Character")),(0,l.kt)("p",null,"A class representing the character inside the selection"),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"identifier")," The same type as provided in the CharacterData in ",(0,l.kt)("a",{parentName:"li",href:"#setIntoCharacterSelection"},"setIntoCharacterSelection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," String"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model")," String or Hash"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ped")," Number (EntityId)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mugshotBoard")," ",(0,l.kt)("a",{parentName:"li",href:"#mugshotboard"},"MugshotBoard"))),(0,l.kt)("h3",{id:"mugshotboard"},(0,l.kt)("inlineCode",{parentName:"h3"},"MugshotBoard")),(0,l.kt)("h4",{id:"properties-1"},"Properties"),(0,l.kt)("p",null,"A class representing the mugshotBoard of each character. You probably shouldn't interact with this."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"boardProp")," Number (EntityId)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"textProp")," Number (EntityId)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scaleform")," Number (ScaleformId)")),(0,l.kt)("h3",{id:"oncharacterspawn"},(0,l.kt)("inlineCode",{parentName:"h3"},"onCharacterSpawn()")),(0,l.kt)("p",null,"Sets the callback that will be executed when a character is spawned."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Function")," Function that receives ",(0,l.kt)("a",{parentName:"p",href:"#character"},"Character")," as parameter"),(0,l.kt)("h4",{id:"usage-6"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  ---@param fn A function that is executed when the character is spawned\n  exports['fivepunch-character-selection']:onCharacterSpawn(function(character)\n    -- myFramework.applyCharacterClothing(character.identifier, character.ped) ...\n  end)\n")),(0,l.kt)("h3",{id:"oncharacterselect"},(0,l.kt)("inlineCode",{parentName:"h3"},"onCharacterSelect()")),(0,l.kt)("p",null,"Sets the callback that will be executed when a character is selected."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Function")," Function that receives ",(0,l.kt)("a",{parentName:"p",href:"#character"},"Character")," as parameter"),(0,l.kt)("h4",{id:"usage-7"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"  ---@param fn A function that is executed when the character is selected\n  exports['fivepunch-character-selection']:onCharacterSelect(function(character)\n    -- Do something ...\n  end)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"common-errors"},"Common errors"),(0,l.kt)("h3",{id:"error-parsing-script--failed-to-load-script"},"Error parsing script / Failed to load script"),(0,l.kt)("p",null,"Your server artifacts are likely outdated. Update your server to version 5181 or above."),(0,l.kt)("h3",{id:"you-lack-the-required-entitlement-to-use-fivepunch-character-selection"},"You lack the required entitlement to use fivepunch-character-selection"),(0,l.kt)("p",null,"Try restarting your server and make sure your server license key is correct. If you bought the resource on the wrong account, you can transfer it to another account on keymaster."),(0,l.kt)("h3",{id:"failed-to-verify-protected-resource"},"Failed to verify protected resource"),(0,l.kt)("p",null,"Files were possibly corrupted during transfer. Ensure hidden files are copied; the .fxap file in a protected resource must be included. Some FTP programs skip these files."))}w.isMDXComponent=!0},7154:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fivepunch-character-selection-banner-e6f2d606b84285bbd29e018a1d731240.png"}}]);