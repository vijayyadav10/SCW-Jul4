(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{736:function(e,t,n){},737:function(e,t,n){"use strict";n.r(t);n(323),n(324);var a=n(47),o=n(48),c=n(56),s=n(49),r=n(51),i=n(320),l=n(110),p=n(171),d=n(1),u=n.n(d),h=n(22),b=n.n(h),f=n(741),j=n(91),g=n(29),m={"app.content":"Content","app.info":"Info","app.name":"Name","app.created":"Created by","app.createdDate":"Created date","app.selectDefaultTemplate":"Select default template*","app.addExistingContent":"Add existing content","app.addNewContent":"Add new content","app.selectContent":"Select Content","app.select":"Select","app.selectCollection":"Select Collection Type","app.chooseAnOption":"Choose an option","app.widgetConfiguration":"Widget Configuration","app.queryFilter":"Query Filter","app.cancel":"Cancel","app.saveAsQuery":"Save as Query","app.saveAsListOfContents":"Save as list of Contents","app.search":"Search","app.lastEdited":"Last edited","app.result":"Result","app.remove":"Remove","app.query":"Query","app.selectTemplate":"Select Template","app.save":"Save","app.edit":"Edit content","app.noMatchesFound":"No matches found","app.noDataAvailable":"No data available","app.firstPage":"First Page","app.previousPage":"Previous Page","app.currentPage":"Current Page","app.nextPage":"Next Page","app.lastPage":"Last Page","app.perPage":"per page","app.of":"of","app.ok":"Ok"},O={"app.content":"Contenuto","app.info":"Informazioni","app.name":"Nome","app.created":"Creata da","app.createdDate":"Data di Creazione","app.selectDefaultTemplate":"Seleziona il modello predefinito*","app.addExistingContent":"Aggiungi contenuto esistente","app.addNewContent":"Aggiungi nuovo contenuto","app.selectContent":"Seleziona Contenuto","app.select":"Selezionare","app.selectCollection":"Seleziona Tipo di raccolta","app.chooseAnOption":"Scegliere un'opzione","app.widgetConfiguration":"Widget Configuration","app.queryFilter":"Filtro di query","app.cancel":"Annulla","app.saveAsQuery":"Salva come query","app.saveAsListOfContents":"Salva come elenco di contenuti","app.search":"Ricerca","app.lastEdited":"Ultima modifica","app.result":"Risultato","app.remove":"Rimuovere","app.query":"Domanda","app.selectTemplate":"Seleziona Modello","app.save":"Salva","app.edit":"Modifica contenutoe","app.noMatchesFound":"Nessun risultato trovato","app.noDataAvailable":"Nessun dato disponibile","app.firstPage":"Prima pagina","app.previousPage":"Pagina precedente","app.currentPage":"Pagina corrente","app.nextPage":"Pagina successiva","app.lastPage":"Ultima pagina","app.perPage":"per pagina","app.of":"di","app.ok":"Ok"},y=n(25),x=n(14),C=n.n(x),v=n(742),T=n(16),S=n(70),w=n.n(S),k=n(7),N=[5,10,15,25,50],P=Object(k.jsx)(v.a,{id:"app.selectCollection"}),I=Object(k.jsx)(v.a,{id:"app.select"}),B=Object(k.jsx)(v.a,{id:"app.name"}),M=Object(k.jsx)(v.a,{id:"app.created"}),A=Object(k.jsx)(v.a,{id:"app.lastEdited"}),D=Object(k.jsx)(v.a,{id:"app.createdDate"}),L={SELECT:I,NAME:B,CREATEDBY:M,lastEdited:A,CREATEDDATE:D},z=Object(k.jsx)(v.a,{id:"app.addNewContent"}),R="EntKcToken",F="YYYY-MM-DD HH:mm:ss",E=[".JPEG",".JPG",".PNG",".GIF",".SVG",".TIFF",".ICO",".DVU"],_="url",U=["createdAt","updatedAt","publishedAt","createdBy","updatedBy","id","localizations","locale"],K="13px",W=Object(k.jsx)(v.a,{id:"app.noDataAvailable"}),H=function(e){if(e){var t=Object.keys(e),n=t.findIndex((function(e){return"title"===e.toLowerCase()}));if(n>-1)return Object.keys(e)[n];if((n=t.findIndex((function(e){return"name"===e.toLowerCase()})))>-1)return Object.keys(e)[n];var a=t.filter((function(e){return!U.includes(e)}));if(a&&a.length)return a[0]}return"-"},Q=function(e){return e.length>0?JSON.parse(e):e},J=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(k.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(k.jsx)("span",{className:"fa fa-angle-down"})})},o.onChangeTemplateId=function(e){o.props.setTemplateId(e.target.value)},o.state={templateType:[{label:"vj"}],selectedTemplateType:[]},o}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("table",{className:"table table-bordered table-datatable table-hover table-striped Contents__table-element",children:[Object(k.jsx)("thead",{children:Object(k.jsx)("tr",{children:Object.keys(G).map((function(e,t){return Object(k.jsx)("th",{children:Object(k.jsx)(v.a,{id:G[e]})},t)}))})}),Object(k.jsx)("tbody",{children:this.props.selectedContent.length>0&&this.props.selectedContent.map((function(t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t[H(t)]}),Object(k.jsx)("td",{children:"".concat(t.createdBy.firstname," ").concat(t.createdBy.lastname)}),Object(k.jsx)("td",{children:w()(new Date(t.updatedAt)).format(F)}),Object(k.jsx)("td",{children:w()(new Date(t.publishedAt)).format(F)}),Object(k.jsx)("td",{children:Object(k.jsxs)("select",{name:"modelId",defaultValue:"default"===e.props.selectedTemplateId?"none":e.props.selectedTemplateId,className:"form-control",onChange:e.onChangeTemplateId,children:[Object(k.jsx)(v.a,{id:"app.selectTemplate",children:function(e){return Object(k.jsx)("option",{value:"none",disabled:!0,hidden:!0,children:e})}}),e.props.templateList.map((function(e){return Object(k.jsx)("option",{value:e.id,children:e.templateName},e.id)}))]})})]},t.id)}))})]})})}}]),n}(u.a.Component),G={Title:"app.name",createdAt:"app.created",updatedAt:"app.lastEdited",createDate:"app.createdDate",selectDefaultTemplate:"app.selectDefaultTemplate"},Y=n(57),V=n(59),q=n.n(V),X="".concat("http://localhost:1337"),Z="".concat("http://localhost:8081/api","/template/"),$="".concat(X,"/content-manager/collection-types/api::"),ee="".concat(X,"/i18n/locales"),te="&sort=createdAt:DESC",ne={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU3MDgyNjQwLCJleHAiOjE2NTk2NzQ2NDB9.nr9AvPT9An8yqF4dJ62SO-kwRA17kfe-Cjy2ujF0Yco")},ae=function(){var e=Object(y.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("".concat(X,"/content-manager/content-types"),de({},R));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(y.a)(C.a.mark((function e(t){var n,a,o,c,s,r=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,a=r.length>2&&void 0!==r[2]?r[2]:5,o="".concat($).concat(t,".").concat(t,"?page=").concat(n,"&pageSize=").concat(a).concat(te),e.next=5,q.a.get(o,de({},R));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(y.a)(C.a.mark((function e(t,n){var a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&n||console.error(t,n),a="".concat(X,"/content-manager/collection-types/api::").concat(t,".").concat(t,"/").concat(n),e.next=4,q.a.get(a,de({},R));case 4:return o=e.sent,c=o.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),se=function(){var e=Object(y.a)(C.a.mark((function e(){var t,n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(ee),e.next=3,q.a.get(t,de({},R));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(y.a)(C.a.mark((function e(t,n){var a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat($).concat(t,".").concat(t,"/").concat(n),e.next=3,q.a.get(a,de({},R));case 3:return o=e.sent,c=o.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(){var e=Object(y.a)(C.a.mark((function e(t,n,a){var o,c,s,r,i,l=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=l.length>3&&void 0!==l[3]?l[3]:1,c=l.length>4&&void 0!==l[4]?l[4]:5,t){e.next=4;break}throw new Error("collectionType is missing");case 4:return s="".concat($).concat(t,".").concat(t,"?filters[").concat(a,"][$containsi]=").concat(n,"&page=").concat(o,"&pageSize=").concat(c),e.next=7,q.a.get(s,de({},R));case 7:return r=e.sent,i=r.data,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),le=function(){var e=Object(y.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?"?collectionType=".concat(t):"",e.next=3,q.a.get("".concat(Z+n),de({}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(e){return e===R?{headers:ne}:{}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=pe(t);return Object(Y.a)(Object(Y.a)({},e),n)},ue="".concat("http://localhost:1337"),he=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=Object(y.a)(C.a.mark((function e(){var t,n,a,c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:if(t=(t=e.sent).data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push({label:e.info.pluralName})})),!(a=Q(o.props.collType)).length||!o.props.selectedContentId){e.next=14;break}return e.next=10,le(a[0].value?a[0].value:"");case 10:c=e.sent,s=c.data,o.setState({templateList:s,collectionTypes:s}),o.fetchContentById(a[0].value,o.props.selectedContentId);case 14:case"end":return e.stop()}}),e)}))),o.fetchContentById=function(){var e=Object(y.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(t,n);case 2:a=e.sent,o.setState({selectedContent:[a]});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.onChangeTemplateId=function(e){o.setState({selectedTemplateId:e.target.value})},o.handleTypeaheadChangeContentType=function(e){var t=e.map((function(e){return e.label}));o.setState({templateList:t})},o.handleAddNewContent=function(){var e="".concat(ue,"/admin/content-manager"),t=window.open(e,"_blank");t&&t.focus()},o.state={selectedContent:[],name:null,nameTwo:null,collectionTypes:[],selectedContentId:0,selectedTemplateId:"default",templateList:[]},o.handleAddNewContent=o.handleAddNewContent.bind(Object(c.a)(o)),o}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)("form",{className:"form-horizontal SingleContentConfigForm well",children:Object(k.jsx)(T.Row,{children:Object(k.jsx)(T.Col,{xs:12,children:Object(k.jsx)("div",{children:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:"icon fa fa-puzzle-piece",title:"Widget"}),Object(k.jsx)("h5",{className:"SingleContentConfigFormBody__widgetTitle",children:Object(k.jsx)(v.a,{id:"app.content"})}),Object(k.jsx)("div",{className:"SectionTitle SectionTitle__non-collapsable",role:"button",children:Object(k.jsxs)("span",{children:[" ",Object(k.jsx)(v.a,{id:"app.info"})]})}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)(T.Col,{xs:6,children:Object(k.jsxs)("h3",{className:"SingleContentConfigFormBody__contentTitle",children:[Object(k.jsx)(v.a,{id:"app.content"}),": -"]})}),Object(k.jsxs)(T.Col,{xs:6,className:"SingleContentConfigFormBody__addButtons",children:[Object(k.jsx)(j.b,{to:"/singleconfigpage",children:Object(k.jsx)(T.Button,{bsStyle:"primary",children:this.state.selectedContent.length?Object(k.jsx)(v.a,{id:"app.edit"}):Object(k.jsx)(v.a,{id:"app.addExistingContent"})})}),Object(k.jsx)(T.Button,{className:"AddContentTypeFormBody__save--btn",bsStyle:"primary",onClick:this.handleAddNewContent,children:z})]})]}),Object(k.jsx)("div",{style:{marginTop:"1rem"}}),Object(k.jsx)(J,{setTemplateId:this.props.setTemplateId,templateList:this.state.templateList,content:this.state.selectedContent,selectedContent:this.state.selectedContent,selectedTemplateId:this.props.selectedTemplateId})]})})})})})}}]),n}(d.Component),be=n(138),fe=n(319),je=n(90),ge=n(132),me=n(304),Oe=1,ye=function(e){return Oe+=1,Object(k.jsx)(ge.a,{accordion:!0,id:Oe,style:{marginBottom:"5px"},children:e&&Object.keys(e).length>0?Me(e)?ve(_,0,e.url):Object.keys(e).filter((function(e){return De(e)})).map((function(t,n){var a,o;return Ce(e)&&t&&(Number(t)||0===Number(t))?(e[t]&&((a=xe(e[t]))&&!Number(a)?delete(o=Object(Y.a)({},e[t])).__component:(a=t,o=e[t])),a&&(Number(a)||0===Number(a))&&(a=(a=Number(a)+1).toString())):(a=t,o=e[t]),ve(a,n,o)})):Object(k.jsx)("span",{children:W})})},xe=function(e){if(e&&Object.keys(e).includes("__component")){var t=e.__component&&e.__component.split(".");if(t&&t.length>0)return t[1]&&t[1].indexOf("-")?t[1].replace("-","_"):t[1]}},Ce=function(e){return!!e&&!!Array.isArray(e)},ve=function(e,t,n){return Object(k.jsxs)(me.a,{eventKey:t,children:[Te(e,n),Be(n)&&ke(n,!0)]},t)},Te=function(e,t){return Object(k.jsx)(me.a.Heading,{children:Be(t)&&!Me(t)?we(e):Se(e,t)})},Se=function(e,t){return Object(k.jsx)(me.a.Title,{children:Object(k.jsxs)(je.Grid.Row,{className:"show-grid",style:{display:"flex",fontSize:K},children:[Object(k.jsx)(je.Grid.Col,{style:{width:"10%",marginLeft:"2.5rem",wordBreak:"break-word"},children:Object(k.jsx)("div",{children:Object(k.jsx)("strong",{children:Me(t)&&Ae(e)?"Photo "+e.charAt(0).toUpperCase()+e.slice(1):e.charAt(0).toUpperCase()+e.slice(1)})})}),Object(k.jsx)(je.Grid.Col,{style:{width:"90%",marginLeft:"1rem",paddingRight:"2rem",lineHeight:"1.2"},children:Me(t)?Ne(t[_.toLowerCase()]):Ne(t)})]})})},we=function(e){return Object(k.jsx)(me.a.Title,{toggle:!0,style:{marginLeft:"-1rem",fontSize:K},children:Object(k.jsx)("span",{children:Object(k.jsx)("strong",{children:e.charAt(0).toUpperCase()+e.slice(1)})})})},ke=function(e,t){return t?Object(k.jsx)(me.a.Body,{collapsible:!0,children:ye(e)}):Object(k.jsx)(me.a.Body,{collapsible:!0,children:Object(k.jsx)("span",{children:e})})},Ne=function(e){return null===e||void 0===e?Object(k.jsx)("span",{children:" - "}):"boolean"===typeof e?Object(k.jsx)("span",{children:e.toString()}):"string"===typeof e?Ie(e)?Object(k.jsx)("img",{src:"http://localhost:1337"+e,width:"50px",height:"50px",alt:"image"}):Pe(e)?Object(k.jsx)("span",{children:w()(new Date(e)).format(F)}):Object(k.jsx)("span",{style:{wordBreak:"break-word"},children:e}):"number"===typeof e?Object(k.jsx)("span",{children:e}):"object"===typeof e?e:Object(k.jsx)("span",{children:" - "})},Pe=function(e){return!!(e&&e&&e.endsWith("Z")&&24===e.length&&10===e.split("T")[0].length&&13===e.split("T")[1].length)},Ie=function(e){var t,n=Object(be.a)(E);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.toUpperCase().endsWith(a))return!0}}catch(o){n.e(o)}finally{n.f()}return!1},Be=function(e){return!!e&&"object"===typeof e},Me=function(e){var t=e&&Object.keys(e);return!!(t&&t.includes("ext")&&t.includes("formats")&&t.includes("url")&&E.includes(e.ext.toUpperCase()))},Ae=function(e){return!!(e&&Number(e)&&Number(e)>=0)},De=function(e){return!U.includes(e)},Le=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).toggleTab=function(e){o.state.dataToShowOnModal.localizations&&o.state.dataToShowOnModal.localizations.length>0&&o.getCollectionByLocaleName(o.state.currentCode[e]),o.props.setActiveTabKey(e)},o.getLocaleInfo=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:t=e.sent,o.setState({localeInfo:t});case 4:case"end":return e.stop()}}),e)}))),o.componentDidMount=Object(y.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.getLocaleInfo();case 1:case"end":return e.stop()}}),e)}))),o.getCollectionByLocaleName=function(){var e=Object(y.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(o.props.collectionType,t);case 2:n=e.sent,t===o.props.contentId?o.setState({dataToShowOnModal:Object(Y.a)({},n)}):o.setState({dataToShowOnModalRestTabs:Object(Y.a)({},n)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.componentDidUpdate=function(){var e=Object(y.a)(C.a.mark((function e(t,n){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.props.collectionType||!o.props.contentId){e.next=9;break}if(t.collectionType===o.props.collectionType&&t.contentId===o.props.contentId){e.next=9;break}return e.next=4,re(o.props.collectionType,o.props.contentId);case 4:a=e.sent,o.setState({dataToShowOnModal:Object(Y.a)({},a)}),o.setState({dataToShowOnModalRestTabs:Object(Y.a)({},a)}),o.props.setActiveTabKey(0),o.setState({currentCode:[o.props.contentId]});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.state={show:!0,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null,collectionAttributes:o.props.dummyData,dataToShowOnModal:{},localeInfo:[],currentCode:[o.props.contentId],dataToShowOnModalRestTabs:{}},o.toggleTab=o.toggleTab.bind(Object(c.a)(o)),o.getCollectionByLocaleName=o.getCollectionByLocaleName.bind(Object(c.a)(o)),o}return Object(o.a)(n,[{key:"getLocaleFullName",value:function(e){return this.state.localeInfo.filter((function(t){return t.code===e}))[0].name}},{key:"render",value:function(){var e=this;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(T.Modal,{dialogClassName:"ContentsFilterModal",show:this.props.show,onHide:this.props.onHide,children:[Object(k.jsx)(T.Modal.Header,{children:Object(k.jsx)(T.Modal.Title,{children:this.state.dataToShowOnModal&&Object.keys(this.state.dataToShowOnModal).length>0&&this.props.fetchTitleOrName(this.state.dataToShowOnModal)})}),Object(k.jsxs)(T.Modal.Body,{children:[Object(k.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(k.jsx)("div",{children:Object(k.jsxs)(T.Tabs,{id:"id",activeKey:this.props.activeTabKey,onSelect:this.toggleTab,children:[this.state.dataToShowOnModal&&this.state.dataToShowOnModal.locale?Object(k.jsx)(T.Tab,{eventKey:0,title:this.getLocaleFullName(this.state.dataToShowOnModal.locale).split(" ")[0],style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:ye(this.state.dataToShowOnModal)}):Object(k.jsx)(T.Tab,{eventKey:0,title:"English",style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:ye(this.state.dataToShowOnModal)}),this.state.dataToShowOnModal&&this.state.dataToShowOnModal.localizations&&this.state.dataToShowOnModal.localizations.length>0&&this.state.dataToShowOnModal.localizations.map((function(t,n){return e.state.currentCode.push(t.id),Object(k.jsx)(T.Tab,{eventKey:n+1,title:e.getLocaleFullName(t.locale).split(" ")[0],style:{overflowY:"auto",height:"38rem",overflowX:"hidden"},children:ye(e.state.dataToShowOnModalRestTabs)},n+1)}))]})})]}),Object(k.jsx)(T.Modal.Footer,{children:Object(k.jsx)(T.Button,{bsStyle:"primary",onClick:this.props.onHide,children:Object(k.jsx)(v.a,{id:"app.ok"})})})]})})}}]),n}(d.Component),ze=n(136),Re=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=Object(y.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.initSingleContentListPage();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.componentWillUnmount=function(){return o.shouldShowEtSaveBtn("visible")},o.componentDidUpdate=function(){var e=Object(y.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t.selectedCollectionType!==o.props.selectedCollectionType||n.pageSize!==o.state.pageSize&&!o.state.searchBtnClk)&&o.setState({page:1,pageInput:1,currPageWillUpdating:1},Object(y.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.doContentSearch();case 2:case"end":return e.stop()}}),e)})))),n.page===o.state.page||o.state.searchBtnClk){e.next=4;break}return e.next=4,o.doContentSearch();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.shouldShowEtSaveBtn=function(e){var t,n=Object(be.a)(document.getElementsByClassName("pull-right save btn btn-primary"));try{for(n.s();!(t=n.n()).done;){t.value.style.visibility=e}}catch(a){n.e(a)}finally{n.f()}},o.filterUidByApiPrefix=function(e){return e.filter((function(e){return e.uid.startsWith("api::")}))},o.open=function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.setState({show:!0,contentDetailsOnModal:t,contentIdForModal:t&&t.id,activeTabKey:0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.close=function(){o.setState({show:!1})},o.setActiveTabKey=function(e){o.setState({activeTabKey:e})},o.handleCollectionTypeChange=function(){var e=Object(y.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.searchByKey="",o.setState({contents:[],selectedContent:{}}),n=t[0],o.setState({selectedCollectionType:t}),!n||!n.value){e.next=10;break}return e.next=7,o.getContentsByCollectionType(n.value);case 7:o.props.setSelectedContentName(n.value),e.next=11;break;case 10:o.props.setSelectedContentName(null);case 11:o.setState({contentIdForModal:void 0,currPageWillUpdating:1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.getContentsByCollectionType=function(){var e=Object(y.a)(C.a.mark((function e(t,n,a){var c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t,n,a);case 2:c=e.sent,o.props.collType&&Q(o.props.collType)[0].value===o.props.selectedContentName&&(s=c&&c.results&&c.results.find((function(e){if(+e.id===+o.props.selectedContentId)return e})),o.props.selectedContentId&&o.setState({selectedContent:s})),o.setState({contents:c.results,lastPage:c.pagination.pageCount,page:c.results.length?c.pagination.page:0,currPageWillUpdating:c.results.length?c.pagination.page:0,pageSize:c.pagination.pageSize,totalItems:c.pagination.total});case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),o.renderToggleButton=function(e){e.isMenuShown;var t=e.onClick;return Object(k.jsx)("button",{type:"button",style:{position:"absolute",height:"100%",top:"0px",right:"0px",border:"1px solid lightgray"},onClick:function(e){e.preventDefault(),t(e)},children:Object(k.jsx)("span",{className:"fa fa-angle-down"})})},o.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=o.totalPages()){var n=Object.assign({},o.state.pagination);n.page=t,o.setState({pagination:n,pageChangeValue:t})}},o.onContentSearch=function(){var e=Object(y.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!o.state.searchQuery){e.next=8;break}return e.next=4,ie(o.state.selectedCollectionType[0].value,o.state.searchQuery,o.searchByKey,1,5);case 4:n=e.sent,o.handleStateOnTermSearch(n),e.next=9;break;case 8:o.getContentsByCollectionType(o.state.selectedCollectionType[0].value);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleQueryChange=function(e){e.preventDefault(),o.setState({searchQuery:e.target.value})},o.onPerPageSelect=function(e){o.setState({searchBtnClk:!1}),o.setState({pageSize:e})},o.onPageInput=function(e){o.setState({currPageWillUpdating:e.target.value})},o.onSubmit=function(){+o.state.currPageWillUpdating&&o.state.currPageWillUpdating<=o.state.lastPage&&o.setState({page:+o.state.currPageWillUpdating})},o.fetchTitleOrName=function(e){if(e){var t=Object.keys(e),n=t.findIndex((function(e){return"title"===e.toLowerCase()}));if(n>-1)return o.searchByKey=Object.keys(e)[n],e[Object.keys(e)[n]];if((n=t.findIndex((function(e){return"name"===e.toLowerCase()})))>-1)return o.searchByKey=Object.keys(e)[n],e[Object.keys(e)[n]];var a=t.filter((function(e){return!U.includes(e)}));if(a&&a.length)return o.searchByKey=a[0],e[a[0]]}return o.searchByKey="","-"},o.radioButton=function(e){return o.state.selectedContent&&o.state.selectedContent.id?o.props.collType.length?Object(k.jsx)("input",{onChange:function(){o.setState({selectedContent:e})},type:"radio",id:e.id,name:"content",value:e.id,defaultChecked:o.state.selectedContent.id===e.id&&Q(o.props.collType)[0].value===o.props.selectedContentName}):Object(k.jsx)("input",{onChange:function(){o.setState({selectedContent:e})},type:"radio",id:e.id,name:"content",value:e.id,defaultChecked:o.state.selectedContent.id===e.id}):Object(k.jsx)("input",{onChange:function(){o.setState({selectedContent:e})},type:"radio",id:e+e.id,name:"content",value:e.id})},o.onPageNavigation=function(e){o.setState({searchBtnClk:!1}),o.changePage(e)},o.saveHandler=function(){o.props.setContent([o.state.selectedContent]),o.props.setCollectionType(o.state.selectedCollectionType),o.props.setTemplateId("default")},o.cancelHandler=function(){o.props.collType.length&&o.props.setSelectedContentName(Q(o.props.collType)[0].value)},o.state={page:1,currPageWillUpdating:1,pageSize:5,totalItems:20,lastPage:4,pageInput:1,pageChangeValue:1,show:!1,activeTabKey:0,contentDetailsOnModal:{},searchQuery:"",setSearchBy:"",searchBtnClk:!1,collectionType:[],selectedCollectionType:[],contents:[],selectedContent:{},contentIdForModal:""},o.searchByKey="",o}return Object(o.a)(n,[{key:"initSingleContentListPage",value:function(){var e=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setCollectionTypeState();case 2:if(this.shouldShowEtSaveBtn("hidden"),!(t=Q(this.props.collType))){e.next=8;break}return this.setState({selectedCollectionType:t}),e.next=8,this.getContentsByCollectionType(t[0].value,this.state.page,this.state.pageSize);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"doContentSearch",value:function(){var e=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.searchByKey||!this.state.searchQuery){e.next=7;break}return e.next=3,ie(this.state.selectedCollectionType[0].value,this.state.searchQuery,this.searchByKey,this.state.page,this.state.pageSize);case 3:t=e.sent,this.handleStateOnTermSearch(t),e.next=9;break;case 7:return e.next=9,this.getContentsByCollectionType(this.state.selectedCollectionType[0].value,this.state.page?this.state.page:1,this.state.pageSize);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setCollectionTypeState",value:function(){var e=Object(y.a)(C.a.mark((function e(){var t,n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:t=e.sent,n=t.data,a=this.filterUidByApiPrefix(n),this.setState({collectionType:a.map((function(e){return{label:e.info.displayName,value:e.info.singularName}}))});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changePage",value:function(e){this.setState({page:e,currPageWillUpdating:e})}},{key:"handleStateOnTermSearch",value:function(e){this.setState({contents:e.results,lastPage:e.pagination.pageCount,page:e.results.length?e.pagination.page:0,currPageWillUpdating:e.results.length?e.pagination.page:0,pageSize:e.pagination.pageSize,totalItems:e.pagination.total,searchBtnClk:!0})}},{key:"render",value:function(){var e,t=this,n={page:this.state.page?this.state.page:1,perPage:this.state.pageSize,perPageOptions:N},a=0===this.state.totalItems?0:(this.state.page-1)*this.state.pageSize+1,o=Math.min(this.state.page*this.state.pageSize,this.state.totalItems),c=!0;return(this.state.selectedContent&&Object.keys(this.state.selectedContent).length||this.props.collType&&Q(this.props.collType)[0].value===this.props.selectedContentName)&&(c=!1),Object(k.jsxs)(T.Grid,{children:[Object(k.jsx)(T.Row,{className:"mt-2",children:Object(k.jsx)(T.Col,{lg:12,children:Object(k.jsx)("legend",{children:Object(k.jsx)(v.a,{id:"app.selectContent"})})})}),Object(k.jsx)(T.Row,{className:"mt-2",children:Object(k.jsx)(T.Col,{lg:3,children:Object(k.jsx)("h6",{children:Object(k.jsx)("b",{children:P})})})}),Object(k.jsx)(T.Row,{children:Object(k.jsx)(T.Col,{lg:3,children:Object(k.jsx)(fe.a,{id:"collectionTypeDropdown",placeholder:this.props.intl.formatMessage({id:"app.chooseAnOption"}),emptyLabel:this.props.intl.formatMessage({id:"app.noMatchesFound"}),options:this.state.collectionType,onChange:this.handleCollectionTypeChange,selected:this.state.selectedCollectionType,children:function(e){var n=e.isMenuShown,a=e.toggleMenu;return t.renderToggleButton({isMenuShown:n,onClick:a})}})})}),Object.keys(this.state.selectedCollectionType).length>0&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(T.Row,{className:"mt-2",children:Object(k.jsx)(T.Col,{lg:3,children:Object(k.jsx)("h5",{style:{marginBottom:"0px"},children:Object(k.jsx)("strong",{children:this.state.selectedCollectionType&&this.state.selectedCollectionType[0]&&this.state.selectedCollectionType[0].label})})})}),Object(k.jsx)(T.Row,{children:Object(k.jsx)(T.Col,{lg:12,children:Object(k.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(k.jsxs)("form",{children:[Object(k.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(k.jsx)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:B}),Object(k.jsx)("input",{type:"search",name:"name",onChange:this.handleQueryChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:this.props.intl.formatMessage({id:"app.result"})})]}),Object(k.jsx)("div",{className:"pull-right mbt10",style:{margin:"0 0 10px 0"},children:Object(k.jsx)("button",{className:"btn btn-primary",onClick:this.onContentSearch,children:Object(k.jsx)(v.a,{id:"app.search"})})})]})})})}),Object(k.jsx)(T.Row,{className:"mt-2",children:Object(k.jsxs)(T.Col,{lg:12,children:[Object(k.jsxs)("table",{className:"table dataTable table-striped table-bordered table-hover",children:[Object(k.jsx)("thead",{children:Object(k.jsx)("tr",{children:Object.keys(L).map((function(e){return Object(k.jsx)("th",{children:L[e]},e)}))})}),Object(k.jsx)("tbody",{children:this.state.contents.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{width:"5%",align:"center",children:t.radioButton(e)}),Object(k.jsx)("td",{role:"button",onClick:function(){return t.open(e)},children:t.fetchTitleOrName(e)}),Object(k.jsx)("td",{role:"button",onClick:function(){return t.open(e)},children:"".concat(e.createdBy.firstname," ").concat(e.createdBy.lastname)}),Object(k.jsx)("td",{role:"button",onClick:function(){return t.open(e)},children:w()(new Date(e.updatedAt)).format(F)}),Object(k.jsx)("td",{role:"button",onClick:function(){return t.open(e)},children:w()(new Date(e.publishedAt)).format(F)})]},e.id)}))})]}),Object(k.jsx)("div",{className:"custom-page"}),Object(k.jsx)(T.PaginationRow,{itemCount:this.state.totalItems,itemsStart:a,itemsEnd:o,viewType:"table",pagination:n,amountOfPages:this.state.lastPage?this.state.lastPage:1,pageInputValue:this.state.currPageWillUpdating?this.state.currPageWillUpdating:1,onPageSet:this.changePage,onPerPageSelect:this.onPerPageSelect,onFirstPage:function(){t.onPageNavigation(1)},onPreviousPage:function(){t.onPageNavigation(t.state.contents.length?t.state.page-1:1)},onPageInput:this.onPageInput,onNextPage:function(){t.onPageNavigation(t.state.page+1)},onLastPage:function(){t.onPageNavigation(t.state.lastPage)},onSubmit:this.onSubmit,messages:(e=this.props,{firstPage:e.intl.formatMessage({id:"app.firstPage"}),previousPage:e.intl.formatMessage({id:"app.previousPage"}),currentPage:e.intl.formatMessage({id:"app.currentPage"}),nextPage:e.intl.formatMessage({id:"app.nextPage"}),lastPage:e.intl.formatMessage({id:"app.lastPage"}),perPage:e.intl.formatMessage({id:"app.perPage"}),of:e.intl.formatMessage({id:"app.of"})})})]})}),Object(k.jsxs)(T.Row,{className:"SingleContentConfigFormBody__actionBar row",children:[Object(k.jsx)(T.Col,{sm:9}),Object(k.jsx)(T.Col,{sm:3,className:"SingleContentConfigFormBody__addButtons",children:Object(k.jsxs)(j.b,{to:"/",children:[Object(k.jsx)("button",{className:"btn-default btn",onClick:this.cancelHandler,children:Object(k.jsx)(v.a,{id:"app.cancel"})}),Object(k.jsx)("button",{className:"btn-primary btn AddContentTypeFormBody__save--btn",onClick:this.saveHandler,disabled:c,children:Object(k.jsx)(v.a,{id:"app.save"})})]})})]})]}),Object(k.jsx)(Le,{show:this.state.show,onHide:this.close,contentDetailsOnModal:this.state.contentDetailsOnModal,contentId:this.state.contentIdForModal,collectionType:this.state.selectedCollectionType&&this.state.selectedCollectionType.length&&this.state.selectedCollectionType[0].value,fetchTitleOrName:this.fetchTitleOrName,activeTabKey:this.state.activeTabKey,setActiveTabKey:this.setActiveTabKey})]})}}]),n}(d.Component),Fe=Object(ze.c)(Re),Ee=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.setLocale()},o.componentDidUpdate=function(e,t){e.config!==o.props.config&&o.setLocale()},o.setContent=function(e){e.length&&o.setState({selectedContentId:e[0].id})},o.setSelectedContentName=function(e){o.setState({selectedContentName:e,name:e,nameTwo:e})},o.setTemplateId=function(e){o.setState({selectedTemplateId:e})},o.setCollectionType=function(e){o.setState({collectionType:JSON.stringify(e)})},o.setLocale=function(){var e=o.props.config&&o.props.config.locale;e.length&&o.setState({locale:e})},o.decideLocale=function(e){return"en"===e?m:"it"===e?O:void 0},o.state={selectedContentId:0,selectedTemplateId:"default",selectedContentName:null,name:"",nameTwo:"nameTwoVar",collectionType:"",locale:"en"},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)(f.a,{locale:this.state.locale,messages:this.decideLocale(this.state.locale),children:Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.a,{children:Object(k.jsxs)(g.c,{children:[Object(k.jsx)(g.a,{path:"/",exact:!0,children:Object(k.jsx)(he,{setTemplateId:this.setTemplateId,selectedContentName:this.state.selectedContentName,collType:this.state.collectionType,selectedContentId:this.state.selectedContentId,selectedTemplateId:this.state.selectedTemplateId})}),Object(k.jsx)(g.a,{path:"/singleconfigpage",exact:!0,children:Object(k.jsx)(Fe,{setContent:this.setContent,selectedContentName:this.state.selectedContentName,setSelectedContentName:this.setSelectedContentName,selectedContentId:this.state.selectedContentId,setCollectionType:this.setCollectionType,collType:this.state.collectionType,setTemplateId:this.setTemplateId})})]})})})})}}]),n}(d.Component),_e=Object(p.a)("config"),Ue=Object(p.a)("updateConfig"),Ke=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),e=t.call(this),Object.defineProperty(Object(c.a)(e),Ue,{value:We}),Object.defineProperty(Object(c.a)(e),_e,{writable:!0,value:{locale:"en"}}),e.reactRootRef=u.a.createRef(),e.mountPoint=null,e}return Object(o.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){Object(l.a)(this,Ue)[Ue](n),b.a.render(Object(k.jsx)(Ee,{ref:this.reactRootRef,config:Object(l.a)(this,_e)[_e]}),this.mountPoint)}},{key:"config",get:function(){return this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(e){return this.reactRootRef.current.setState(e)}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),b.a.render(Object(k.jsx)(Ee,{ref:this.reactRootRef,config:Object(l.a)(this,_e)[_e]}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return["config"]}}]),n}(Object(i.a)(HTMLElement));function We(e){Object(l.a)(this,_e)[_e]=JSON.parse(e)}customElements.get("single-content-widget-config")||customElements.define("single-content-widget-config",Ke);n(736)}},[[737,1,2]]]);
//# sourceMappingURL=main.f757b7be.chunk.js.map