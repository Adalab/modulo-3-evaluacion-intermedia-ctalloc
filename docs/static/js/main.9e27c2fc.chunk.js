(this["webpackJsonpplantilla-react"]=this["webpackJsonpplantilla-react"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),o=r(7),a=r.n(o),i=r(2),p=r(3),u=r(5),c=r(4),l=r(0),m=function(e){var t=e.pokeData.types.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}));return Object(l.jsxs)("article",{children:[Object(l.jsx)("img",{src:e.pokeData.url,alt:"Logo"}),Object(l.jsx)("h2",{children:e.pokeData.name}),Object(l.jsx)("ul",{children:t})]})},h=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){console.log(this.props.pokemonData);var e=this.props.pokemonData.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(m,{pokeData:e})},t)}));return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:e})})}}]),r}(n.a.Component),b=(r(13),function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var s;return Object(i.a)(this,r),(s=t.call(this,e)).state={pokemonList:[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]},s}return Object(p.a)(r,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Lista de pokemons"})}),Object(l.jsx)(h,{pokemonData:this.state.pokemonList})]})}}]),r}(n.a.Component));a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9e27c2fc.chunk.js.map