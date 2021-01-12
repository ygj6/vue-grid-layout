(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{439:function(e,t,v){"use strict";v.r(t);var a=v(26),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"properties"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),v("h2",{attrs:{id:"gridlayout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gridlayout"}},[e._v("#")]),e._v(" GridLayout")]),e._v(" "),v("h3",{attrs:{id:"layout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[e._v("#")]),e._v(" layout")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Array")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("This is the initial layout of the grid.")]),e._v(" "),v("p",[e._v("The value must be an "),v("code",[e._v("Array")]),e._v(" of "),v("code",[e._v("Object")]),e._v(" items. Each item must have "),v("code",[e._v("i")]),e._v(", "),v("code",[e._v("x")]),e._v(", "),v("code",[e._v("y")]),e._v(", "),v("code",[e._v("w")]),e._v(" and "),v("code",[e._v("h")]),e._v(" properties. Please refer to the documentation for "),v("code",[e._v("GridItem")]),e._v(" below for more information.")]),e._v(" "),v("h3",{attrs:{id:"responsivelayouts"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#responsivelayouts"}},[e._v("#")]),e._v(" responsiveLayouts")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Object")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default : "),v("code",[e._v("{}")])])]),e._v(" "),v("p",[e._v("This is the initial layouts of the grid per breakpoint if "),v("code",[e._v("responsive")]),e._v(" is set to "),v("code",[e._v("true")]),e._v(".\nThe keys of the "),v("code",[e._v("Object")]),e._v(" are breakpoint names and each value is an "),v("code",[e._v("Array")]),e._v(" of "),v("code",[e._v("Object")]),e._v(" items as defined by "),v("code",[e._v("layout")]),e._v(" prop. eg:{ lg:[layout items], md:[layout items] }.\nSetting the prop after the creation of the GridLayout has no effect.")]),e._v(" "),v("p",[e._v("See also "),v("a",{attrs:{href:"#responsive"}},[e._v("responsive")]),e._v(", "),v("a",{attrs:{href:"#breakpoints"}},[e._v("breakpoints")]),e._v(" and "),v("a",{attrs:{href:"#cols"}},[e._v("cols")])]),e._v(" "),v("h3",{attrs:{id:"colnum"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#colnum"}},[e._v("#")]),e._v(" colNum")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("12")])])]),e._v(" "),v("p",[e._v("Says how many columns the grid has.")]),e._v(" "),v("p",[e._v("The value should be a "),v("em",[e._v("natural number")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"rowheight"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rowheight"}},[e._v("#")]),e._v(" rowHeight")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("150")])])]),e._v(" "),v("p",[e._v("Says what is a height of a single row in pixels.")]),e._v(" "),v("h3",{attrs:{id:"maxrows"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#maxrows"}},[e._v("#")]),e._v(" maxRows")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("Infinity")])])]),e._v(" "),v("p",[e._v("Says what is a maximal number of rows in the grid.")]),e._v(" "),v("h3",{attrs:{id:"margin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[e._v("#")]),e._v(" margin")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Array")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("[10, 10]")])])]),e._v(" "),v("p",[e._v("Says what are the margins of elements inside the grid.")]),e._v(" "),v("p",[e._v("The value must be a two-element "),v("code",[e._v("Array")]),e._v(" of "),v("code",[e._v("Number")]),e._v(". Each value is expressed in pixels. The first element is a margin horizontally, the second element is a vertical margin.")]),e._v(" "),v("h3",{attrs:{id:"isdraggable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isdraggable"}},[e._v("#")]),e._v(" isDraggable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says if the grids items are draggable.")]),e._v(" "),v("h3",{attrs:{id:"isresizable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isresizable"}},[e._v("#")]),e._v(" isResizable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says if the grids items are resizable.")]),e._v(" "),v("h3",{attrs:{id:"ismirrored"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ismirrored"}},[e._v("#")]),e._v(" isMirrored")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("Says if the RTL/LTR should be reversed.")]),e._v(" "),v("h3",{attrs:{id:"autosize"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#autosize"}},[e._v("#")]),e._v(" autoSize")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says if the container height should swells and contracts to fit contents.")]),e._v(" "),v("h3",{attrs:{id:"verticalcompact"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#verticalcompact"}},[e._v("#")]),e._v(" verticalCompact")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says if the layout should be compact vertically.")]),e._v(" "),v("h3",{attrs:{id:"preventcollision"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#preventcollision"}},[e._v("#")]),e._v(" preventCollision")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("Says if grid items will move when being dragged over.")]),e._v(" "),v("h3",{attrs:{id:"usecsstransforms"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#usecsstransforms"}},[e._v("#")]),e._v(" useCssTransforms")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says if the CSS "),v("code",[e._v("transition-property: transform;")]),e._v(" should be used.")]),e._v(" "),v("h3",{attrs:{id:"responsive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#responsive"}},[e._v("#")]),e._v(" responsive")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("Says if the layout should be responsive to window width")]),e._v(" "),v("p",[e._v("See also "),v("a",{attrs:{href:"#responsivelayouts"}},[e._v("responsiveLayouts")]),e._v(", "),v("a",{attrs:{href:"#breakpoints"}},[e._v("breakpoints")]),e._v(" and "),v("a",{attrs:{href:"#cols"}},[e._v("cols")])]),e._v(" "),v("h3",{attrs:{id:"breakpoints"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#breakpoints"}},[e._v("#")]),e._v(" breakpoints")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Object")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }")])]),e._v(" "),v("p",[e._v("Breakpoints defined for responsive layout. Sets widths on wich column number changes")]),e._v(" "),v("p",[e._v("See also "),v("a",{attrs:{href:"#responsivelayouts"}},[e._v("responsiveLayouts")]),e._v(" and "),v("a",{attrs:{href:"#cols"}},[e._v("cols")])]),e._v(" "),v("h3",{attrs:{id:"cols"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cols"}},[e._v("#")]),e._v(" cols")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Object")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }")])]),e._v(" "),v("p",[e._v("Defines number of columns for each breakpoint")]),e._v(" "),v("h3",{attrs:{id:"usestylecursor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#usestylecursor"}},[e._v("#")]),e._v(" useStyleCursor")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says if set the "),v("code",[e._v("styleCursor")]),e._v(" option to true. When dragging freezes, setting this value to "),v("code",[e._v("false")]),e._v(" may alleviate problems.\n"),v("strong",[e._v("This property is not reactive")])]),e._v(" "),v("h2",{attrs:{id:"griditem"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#griditem"}},[e._v("#")]),e._v(" GridItem")]),e._v(" "),v("h3",{attrs:{id:"i"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#i"}},[e._v("#")]),e._v(" i")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("This is the unique identifier of the item.")]),e._v(" "),v("h3",{attrs:{id:"x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#x"}},[e._v("#")]),e._v(" x")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says what is a initial horizontal position of the item (in which column it should be placed).")]),e._v(" "),v("p",[e._v("The value must be a "),v("em",[e._v("whole number")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"y"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#y"}},[e._v("#")]),e._v(" y")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says what is a initial vertical position of the item (in which row it should be placed).")]),e._v(" "),v("p",[e._v("The value must be a "),v("em",[e._v("whole number")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"w"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#w"}},[e._v("#")]),e._v(" w")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says what is a initial width of the item.")]),e._v(" "),v("p",[e._v("The value is a number that is multiplied by "),v("code",[e._v("colWidth")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"h"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[e._v("#")]),e._v(" h")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("true")])])]),e._v(" "),v("p",[e._v("Says what is a initial height of the item.")]),e._v(" "),v("p",[e._v("The value is a number that is multiplied by "),v("code",[e._v("rowHeight")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"minw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minw"}},[e._v("#")]),e._v(" minW")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("1")])])]),e._v(" "),v("p",[e._v("Says what is a minimal width of the item. If "),v("code",[e._v("w")]),e._v(" will be smaller then "),v("code",[e._v("minW")]),e._v(" then "),v("code",[e._v("w")]),e._v(" will be set to "),v("code",[e._v("minW")]),e._v(".")]),e._v(" "),v("p",[e._v("The value is a number that is multiplied by "),v("code",[e._v("colWidth")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"minh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minh"}},[e._v("#")]),e._v(" minH")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("1")])])]),e._v(" "),v("p",[e._v("Says what is a minimal hieght of the item. If "),v("code",[e._v("h")]),e._v(" will be smaller then "),v("code",[e._v("minH")]),e._v(" then "),v("code",[e._v("h")]),e._v(" will be set to "),v("code",[e._v("minH")]),e._v(".")]),e._v(" "),v("p",[e._v("The value is a number that is multiplied by "),v("code",[e._v("rowHeight")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"maxw"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#maxw"}},[e._v("#")]),e._v(" maxW")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("Infinity")])])]),e._v(" "),v("p",[e._v("Says what is a maximal width of the item. If "),v("code",[e._v("w")]),e._v(" will be bigger then "),v("code",[e._v("maxW")]),e._v(" then "),v("code",[e._v("w")]),e._v(" will be set to "),v("code",[e._v("maxW")]),e._v(".")]),e._v(" "),v("p",[e._v("The value is a number that is multiplied by "),v("code",[e._v("colWidth")]),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"maxh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#maxh"}},[e._v("#")]),e._v(" maxH")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Number")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("Infinity")])])]),e._v(" "),v("p",[e._v("Says what is a maximal height of the item. If "),v("code",[e._v("h")]),e._v(" will be bigger then "),v("code",[e._v("maxH")]),e._v(" then "),v("code",[e._v("h")]),e._v(" will be set to "),v("code",[e._v("maxH")]),e._v(".")]),e._v(" "),v("p",[e._v("The value is a number that is multiplied by "),v("code",[e._v("rowHeight")])]),e._v(" "),v("h3",{attrs:{id:"isdraggable-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isdraggable-2"}},[e._v("#")]),e._v(" isDraggable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("null")])])]),e._v(" "),v("p",[e._v("Says if item is draggable.")]),e._v(" "),v("p",[e._v("If default value is "),v("code",[e._v("null")]),e._v(" then it's inherited from parent.")]),e._v(" "),v("h3",{attrs:{id:"isresizable-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#isresizable-2"}},[e._v("#")]),e._v(" isResizable")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("null")])])]),e._v(" "),v("p",[e._v("Says if item is resizable.")]),e._v(" "),v("p",[e._v("If default value is "),v("code",[e._v("null")]),e._v(" then it's inherited from parent.")]),e._v(" "),v("h3",{attrs:{id:"static"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[e._v("#")]),e._v(" static")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("Boolean")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("false")])])]),e._v(" "),v("p",[e._v("Says if item is static (won't be draggable, resizable or moved by other items).")]),e._v(" "),v("h3",{attrs:{id:"dragignorefrom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dragignorefrom"}},[e._v("#")]),e._v(" dragIgnoreFrom")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("'a, button'")])])]),e._v(" "),v("p",[e._v("Says which elements of the item shouldn't trigger drag event of the item.")]),e._v(" "),v("p",[e._v("The value is "),v("code",[e._v("css-like")]),e._v(" selector string.")]),e._v(" "),v("p",[e._v("For more info please refer to "),v("code",[e._v("ignoreFrom")]),e._v(" in "),v("a",{attrs:{href:"http://interactjs.io/docs/#ignorable-selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("interact.js docs"),v("OutboundLink")],1),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"dragallowfrom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dragallowfrom"}},[e._v("#")]),e._v(" dragAllowFrom")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("null")])])]),e._v(" "),v("p",[e._v("Says which elements of the item should trigger drag event of the item.")]),e._v(" "),v("p",[e._v("The value is "),v("code",[e._v("css-like")]),e._v(" selector string.")]),e._v(" "),v("p",[e._v("If "),v("code",[e._v("null")]),e._v(" then one can drag by any (excluding "),v("code",[e._v("dragIgnoreFrom")]),e._v(") element of the item.")]),e._v(" "),v("p",[e._v("For more info please refer to "),v("code",[e._v("allowFrom")]),e._v(" in "),v("a",{attrs:{href:"http://interactjs.io/docs/#ignorable-selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("interact.js docs"),v("OutboundLink")],1),e._v(".")]),e._v(" "),v("h3",{attrs:{id:"resizeignorefrom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#resizeignorefrom"}},[e._v("#")]),e._v(" resizeIgnoreFrom")]),e._v(" "),v("ul",[v("li",[e._v("type: "),v("code",[e._v("String")])]),e._v(" "),v("li",[e._v("required: "),v("code",[e._v("false")])]),e._v(" "),v("li",[e._v("default: "),v("code",[e._v("'a, button'")])])]),e._v(" "),v("p",[e._v("Says which elements of the item shouldn't trigger resize event of the item.")]),e._v(" "),v("p",[e._v("The value is "),v("code",[e._v("css-like")]),e._v(" selector string.")]),e._v(" "),v("p",[e._v("For more info please refer to "),v("code",[e._v("ignoreFrom")]),e._v(" in "),v("a",{attrs:{href:"http://interactjs.io/docs/#ignorable-selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("interact.js docs"),v("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=_.exports}}]);