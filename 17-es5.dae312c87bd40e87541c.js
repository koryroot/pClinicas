!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{fhSy:function(t,o,r){"use strict";r.r(o),r.d(o,"RegisterPageModule",(function(){return h}));var i,a,c,s=r("ofXK"),f=r("3Pt+"),u=r("TEn/"),b=r("tyNb"),p=r("fXoL"),d=r("lGQG"),l=[{path:"",component:(i=function(){function t(e,o,r){n(this,t),this.fb=e,this.auth=o,this.router=r}var o,r,i;return o=t,(r=[{key:"ngOnInit",value:function(){this.initForm()}},{key:"initForm",value:function(){this.form=this.fb.group({name:["",[f.o.required]],correo:["",[f.o.required]],pass:["",[f.o.required]]})}},{key:"cargar",value:function(){var n=this;console.log(this.form);var e={name:this.form.controls.name.value,email:this.form.controls.correo.value,password:this.form.controls.pass.value};console.log(e),this.auth.register("doctor/register",e).subscribe((function(e){n.auth.saveUser(e.response.token),console.log(n.auth.getToken())}))}}])&&e(o.prototype,r),i&&e(o,i),t}(),i.\u0275fac=function(n){return new(n||i)(p.Hb(f.b),p.Hb(d.a),p.Hb(b.g))},i.\u0275cmp=p.Bb({type:i,selectors:[["app-register"]],decls:16,vars:1,consts:[[1,"wrapper","fadeInDown"],["id","formContent"],[1,"inactive","underlineHover"],[1,"fadeIn","first"],["src","../../../assets/medico-m.svg","id","icon","alt","User Icon",1,"icon"],[3,"formGroup","ngSubmit"],["type","text","placeholder","nombre","formControlName","name",1,"w-btn","fadeIn","second"],["type","text","placeholder","correo Electronico","formControlName","correo",1,"w-btn","fadeIn","second"],["type","text","placeholder","contrase\xf1a","formControlName","pass",1,"w-btn","fadeIn","third"],["type","submit","value","Ok!",1,"w-btn","fadeIn","fourth"],["id","formFooter"],["routerLink","/login",1,"underlineHover"]],template:function(n,e){1&n&&(p.Kb(0,"ion-content"),p.Kb(1,"ion-content"),p.Kb(2,"div",0),p.Kb(3,"div",1),p.Kb(4,"h2",2),p.fc(5,"Registrarse "),p.Jb(),p.Kb(6,"div",3),p.Ib(7,"img",4),p.Jb(),p.Kb(8,"form",5),p.Sb("ngSubmit",(function(){return e.cargar()})),p.Ib(9,"input",6),p.Ib(10,"input",7),p.Ib(11,"input",8),p.Ib(12,"input",9),p.Jb(),p.Kb(13,"div",10),p.Kb(14,"a",11),p.fc(15,"Tienes una cuentas? Inicia Seccion"),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb()),2&n&&(p.xb(8),p.Xb("formGroup",e.form))},directives:[u.b,f.q,f.i,f.d,f.a,f.h,f.c,b.i,u.g],styles:["a[_ngcontent-%COMP%]{color:#bbdb93;text-decoration:none;font-weight:400}a[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{display:inline-block}h2[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-weight:600;text-transform:uppercase;margin:40px 8px 10px;color:#ccc}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;width:100%;min-height:100%;padding:20px}#formContent[_ngcontent-%COMP%]{border-radius:10px 10px 10px 10px;background:#fff;width:90%;max-width:450px;position:relative;padding:0;box-shadow:0 30px 60px 0 rgba(0,0,0,.3);text-align:center}#formFooter[_ngcontent-%COMP%]{background-color:#f6f6f6;border-top:1px solid #dce8f1;padding:25px;text-align:center;border-radius:0 0 10px 10px}h2[_ngcontent-%COMP%]{color:#0d0d0d}"]}),i)}],m=((a=function e(){n(this,e)}).\u0275mod=p.Fb({type:a}),a.\u0275inj=p.Eb({factory:function(n){return new(n||a)},imports:[[b.j.forChild(l)],b.j]}),a),g=r("j1ZV"),h=((c=function e(){n(this,e)}).\u0275mod=p.Fb({type:c}),c.\u0275inj=p.Eb({factory:function(n){return new(n||c)},imports:[[s.b,f.e,u.d,m,g.a,f.m]]}),c)}}])}();