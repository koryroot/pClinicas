!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{lWCb:function(o,e,i){"use strict";i.r(e),i.d(e,"CrearPageModule",(function(){return K}));var a=i("ofXK"),r=i("3Pt+"),c=i("TEn/"),b=i("tyNb"),l=i("fXoL"),s=i("I3Nn"),u=i("hrlM");function d(t,n){if(1&t){var o=l.Lb();l.Kb(0,"input",23),l.Sb("click",(function(){return l.bc(o),l.Ub().save()})),l.Jb()}}function f(t,n){if(1&t){var o=l.Lb();l.Kb(0,"input",23),l.Sb("click",(function(){return l.bc(o),l.Ub().update()})),l.Jb()}}var p,m,g,v=[{path:"",component:(p=function(){function o(n,e,i,a){t(this,o),this.router=n,this.pacienterequest=e,this.fb=i,this.rute=a,this.foto="../../../../../assets/mas.png",a.params.subscribe((function(t){console.log(t)}))}var e,i,a;return e=o,(i=[{key:"ngOnInit",value:function(){this.initform(),this.param=this.rute.snapshot.params.cedula,console.log(this.param),this.isUpdate="new"!==this.param}},{key:"initform",value:function(){this.form=this.fb.group({cedula:["",r.o.required],seguro:["",r.o.required],diagnostico:["",r.o.required],motivo:["",r.o.required],fecha:["",r.o.required]})}},{key:"save",value:function(){var t=this;console.log(this.form.controls);var n={patientCedula:this.form.controls.cedula.value,insuranceNumber:this.form.controls.seguro.value,date:this.form.controls.fecha.value,amount:0,reason:this.form.controls.motivo.value,diagnose:this.form.controls.diagnostico.value,note:"",foto:""};console.log(n),this.pacienterequest.regCosulta(n).subscribe((function(n){t.router.navigate(["dash/consulta"])}))}},{key:"update",value:function(){var t=this;this.pacienterequest.updateConsulta({patientCedula:this.form.controls.cedula.value,insuranceNumber:this.form.controls.seguro.value,date:this.form.controls.fecha.value,amount:0,reason:this.form.controls.motivo.value,diagnose:this.form.controls.diagnostico.value,note:"",foto:""},this.param).subscribe((function(n){console.log(n),t.router.navigate(["dash/consulta"])}))}},{key:"back",value:function(){this.router.navigate(["dash/consulta"])}}])&&n(e.prototype,i),a&&n(e,a),o}(),p.\u0275fac=function(t){return new(t||p)(l.Hb(b.g),l.Hb(s.a),l.Hb(r.b),l.Hb(b.a))},p.\u0275cmp=l.Bb({type:p,selectors:[["app-crear"]],decls:50,vars:3,consts:[[1,"fondo_color"],[1,"container-fluid","fondo_color"],[1,"row"],[1,"col-lg-2","col-md-2","col-2","d-flex","align-items-center","justify-content-center",3,"click"],["src","assets/flecha-curva.png",1,"fecha_atras"],[1,"col-lg-12","col-md-12","col-12"],[1,"texto_centro"],[3,"formGroup"],[1,"container","d-flex","align-items-center","justify-content-center"],[1,"col-lg-6","col-md-6","col-12"],[1,"container-fluid","d-flex","align-items-center","justify-content-center"],["for","seguro",1,"label"],["type","text","name","","formControlName","seguro",1,"input"],["for","motivo",1,"label"],["type","text","name","","formControlName","motivo",1,"input"],["for","fecha",1,"label"],["type","text","name","","formControlName","cedula",1,"input"],["for","diagnostico",1,"label"],["type","text","name","","formControlName","diagnostico",1,"input"],["type","text","name","","formControlName","fecha",1,"input"],[1,"container-fluid"],[1,"col-lg-6","col-md-6","col-12","d-flex","align-items-center","justify-content-center"],["class","boton","type","button","value","Guardar",3,"click",4,"ngIf"],["type","button","value","Guardar",1,"boton",3,"click"]],template:function(t,n){1&t&&(l.Ib(0,"app-navbar"),l.Kb(1,"ion-content",0),l.Kb(2,"div",1),l.Kb(3,"div",2),l.Kb(4,"div",3),l.Sb("click",(function(){return n.back()})),l.Ib(5,"img",4),l.Jb(),l.Kb(6,"div",5),l.Kb(7,"h1",6),l.fc(8,"Consulta del paciente"),l.Jb(),l.Jb(),l.Kb(9,"div",5),l.Kb(10,"form",7),l.Kb(11,"div",8),l.Kb(12,"div",2),l.Kb(13,"div",9),l.Kb(14,"div",10),l.Kb(15,"div",2),l.Kb(16,"div",5),l.Kb(17,"label",11),l.fc(18,"# de seguro"),l.Jb(),l.Jb(),l.Kb(19,"div",5),l.Ib(20,"input",12),l.Jb(),l.Kb(21,"div",5),l.Kb(22,"label",13),l.fc(23,"Motivo"),l.Jb(),l.Jb(),l.Kb(24,"div",5),l.Ib(25,"input",14),l.Jb(),l.Kb(26,"div",5),l.Kb(27,"label",15),l.fc(28,"Cedula Paciente"),l.Jb(),l.Jb(),l.Kb(29,"div",5),l.Ib(30,"input",16),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(31,"div",9),l.Kb(32,"div",10),l.Kb(33,"div",2),l.Kb(34,"div",5),l.Kb(35,"label",17),l.fc(36,"Diagnostico"),l.Jb(),l.Jb(),l.Kb(37,"div",5),l.Ib(38,"input",18),l.Jb(),l.Kb(39,"div",5),l.Kb(40,"label",15),l.fc(41,"Fecha"),l.Jb(),l.Jb(),l.Kb(42,"div",5),l.Ib(43,"input",19),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(44,"div",5),l.Kb(45,"div",20),l.Kb(46,"div",2),l.Kb(47,"div",21),l.ec(48,d,1,0,"input",22),l.ec(49,f,1,0,"input",22),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.xb(10),l.Xb("formGroup",n.form),l.xb(38),l.Xb("ngIf",n.form.valid&&!n.isUpdate),l.xb(1),l.Xb("ngIf",n.form.valid&&n.isUpdate))},directives:[u.a,c.b,r.q,r.i,r.d,r.a,r.h,r.c,a.i],styles:["[_nghost-%COMP%]   ng-deep[_ngcontent-%COMP%]   #background-content[_ngcontent-%COMP%]{background:#ebebeb}.fecha_atras[_ngcontent-%COMP%]{padding:5%;width:80px}.texto_centro[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{font-size:60px}.fecha_cuadro[_ngcontent-%COMP%]{background:#f1f1f1;border:6px solid #414141;border-radius:10px;padding:8%;margin-top:100px}label[_ngcontent-%COMP%]{margin-top:100px}.label2[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:30px}.label2[_ngcontent-%COMP%]{margin-top:55px}.input[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{border:6px solid #929292;font-size:25px;width:100%}.boton[_ngcontent-%COMP%]{background:#5ebdbd;margin-top:100px;margin-bottom:100px;color:#fff;border:0 solid;border-radius:10px;font-size:28px;padding:1% 3%;width:40%}.ver[_ngcontent-%COMP%]{background:#639;margin:0}"]}),p)}],h=((m=function n(){t(this,n)}).\u0275mod=l.Fb({type:m}),m.\u0275inj=l.Eb({factory:function(t){return new(t||m)},imports:[[b.j.forChild(v)],b.j]}),m),J=i("j1ZV"),K=((g=function n(){t(this,n)}).\u0275mod=l.Fb({type:g}),g.\u0275inj=l.Eb({factory:function(t){return new(t||g)},imports:[[a.b,r.e,c.d,h,J.a,r.m]]}),g)}}])}();