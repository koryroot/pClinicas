(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{DwD9:function(t,e,o){"use strict";o.r(e),o.d(e,"CrearPageModule",(function(){return h}));var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),c=o("fXoL"),b=o("I3Nn"),l=o("hrlM");function s(t,e){1&t&&c.Ib(0,"img",27)}function d(t,e){if(1&t&&c.Ib(0,"img",28),2&t){const t=c.Ub();c.Yb("src",t.foto,c.cc)}}function u(t,e){1&t&&c.Ib(0,"input",29)}function p(t,e){if(1&t){const t=c.Lb();c.Kb(0,"input",30),c.Sb("click",(function(){return c.bc(t),c.Ub().update()})),c.Jb()}}const f=[{path:"",component:(()=>{class t{constructor(t,e,o,n){this.router=t,this.pacienterequest=e,this.fb=o,this.rute=n,this.foto="../../../../../assets/mas.png",n.params.subscribe(t=>{console.log(t)})}ngOnInit(){this.initform(),this.param=this.rute.snapshot.params.cedula,console.log(typeof this.param),this.isUpdate="new"!==this.param}initform(){this.form=this.fb.group({cedula:["",i.o.required],tipeBlood:["",i.o.required],alerg:["",i.o.required],email:[""]})}cargar(){console.log(this.form.controls),this.pacienterequest.regPaciente({cedula:this.form.controls.cedula.value,foto:"",email:"rm12345@gmail.com",bloodType:this.form.controls.tipeBlood.value,alergies:this.form.controls.alerg.value}).subscribe(t=>{console.log(t),this.router.navigate(["dash/paciente"])})}update(){console.log(this.form.controls),this.pacienterequest.updatePaciente({cedula:this.form.controls.cedula.value,foto:"",email:"rm12345@gmail.com",bloodType:this.form.controls.tipeBlood.value,alergies:this.form.controls.alerg.value}).subscribe(t=>{console.log(t),this.router.navigate(["dash/paciente"])})}back(){this.router.navigate(["dash/paciente"])}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(a.g),c.Hb(b.a),c.Hb(i.b),c.Hb(a.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-crear"]],decls:51,vars:5,consts:[[1,"container-fluid","fondo_color"],[1,"row"],[1,"col-lg-2","col-md-2","col-2","d-flex","align-items-center","justify-content-center",3,"click"],["src","assets/flecha-curva.png",1,"fecha_atras"],[1,"col-lg-12","col-md-12","col-12"],[1,"texto_centro"],[3,"formGroup","ngSubmit"],[1,"container","d-flex","align-items-center","justify-content-center"],[1,"col-lg-6","col-md-6","col-12"],[1,"container-fluid","d-flex","align-items-center","justify-content-center"],["for","cedula",1,"label"],["type","text","name","","id","cedula","formControlName","cedula",1,"input"],["for","tipo_sangre",1,"label"],["name","","id","tipo_sangre","formControlName","tipeBlood",1,"select"],["value","B+"],["value","A"],["value","AB"],["value","O-"],["value","O+"],[1,"col-lg-12","col-md-12","col-12","d-flex","align-items-center","justify-content-center"],[1,"fecha_cuadro"],["src","assets/mas.png","width","50",4,"ngIf"],["width","50",3,"src",4,"ngIf"],["for","alergias",1,"label2"],["type","text","name","","id","alergias","formControlName","alerg",1,"input"],["class","boton","type","submit","value","Guardar",4,"ngIf"],["class","boton","type","button","value","Guardar",3,"click",4,"ngIf"],["src","assets/mas.png","width","50"],["width","50",3,"src"],["type","submit","value","Guardar",1,"boton"],["type","button","value","Guardar",1,"boton",3,"click"]],template:function(t,e){1&t&&(c.Kb(0,"ion-content"),c.Ib(1,"app-navbar"),c.Kb(2,"div",0),c.Kb(3,"div",1),c.Kb(4,"div",2),c.Sb("click",(function(){return e.back()})),c.Ib(5,"img",3),c.Jb(),c.Kb(6,"div",4),c.Kb(7,"h1",5),c.fc(8,"Registro del paciente"),c.Jb(),c.Jb(),c.Kb(9,"div",4),c.Kb(10,"form",6),c.Sb("ngSubmit",(function(){return e.cargar()})),c.Kb(11,"div",7),c.Kb(12,"div",1),c.Kb(13,"div",8),c.Kb(14,"div",9),c.Kb(15,"div",1),c.Kb(16,"div",4),c.Kb(17,"label",10),c.fc(18,"Cedula"),c.Jb(),c.Jb(),c.Kb(19,"div",4),c.Ib(20,"input",11),c.Jb(),c.Kb(21,"div",4),c.Kb(22,"label",12),c.fc(23,"Tipo de sangre"),c.Jb(),c.Jb(),c.Kb(24,"div",4),c.Kb(25,"select",13),c.Kb(26,"option",14),c.fc(27,"B+"),c.Jb(),c.Kb(28,"option",15),c.fc(29,"A"),c.Jb(),c.Kb(30,"option",16),c.fc(31,"AB"),c.Jb(),c.Kb(32,"option",17),c.fc(33,"O-"),c.Jb(),c.Kb(34,"option",18),c.fc(35,"O+"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(36,"div",8),c.Kb(37,"div",9),c.Kb(38,"div",1),c.Kb(39,"div",19),c.Kb(40,"div",20),c.ec(41,s,1,0,"img",21),c.ec(42,d,1,1,"img",22),c.Jb(),c.Jb(),c.Kb(43,"div",4),c.Kb(44,"label",23),c.fc(45,"Alergias"),c.Jb(),c.Jb(),c.Kb(46,"div",4),c.Ib(47,"input",24),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(48,"div",19),c.ec(49,u,1,0,"input",25),c.ec(50,p,1,0,"input",26),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(10),c.Xb("formGroup",e.form),c.xb(31),c.Xb("ngIf",!e.isUpdate),c.xb(1),c.Xb("ngIf",!e.isUpdate),c.xb(7),c.Xb("ngIf",e.form.valid&&!e.isUpdate),c.xb(1),c.Xb("ngIf",e.form.valid&&e.isUpdate))},directives:[r.b,l.a,i.q,i.i,i.d,i.a,i.h,i.c,i.n,i.l,i.p,n.i],styles:["body[_ngcontent-%COMP%]{background:#ebebeb}.fecha_atras[_ngcontent-%COMP%]{padding:5%;width:80px}.texto_centro[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%]{font-size:60px}.fecha_cuadro[_ngcontent-%COMP%]{background:#f1f1f1;border:6px solid #414141;border-radius:10px;padding:8%;margin-top:100px}label[_ngcontent-%COMP%]{margin-top:100px}.label2[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:30px}.label2[_ngcontent-%COMP%]{margin-top:55px}.input[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{border:6px solid #929292;font-size:25px;width:100%}.boton[_ngcontent-%COMP%]{background:#5ebdbd;margin-top:100px;margin-bottom:100px;color:#fff;border:0 solid;border-radius:10px;font-size:28px;padding:1% 3%;width:40%}.ver[_ngcontent-%COMP%]{background:#639;margin:0}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(f)],a.j]}),t})();var m=o("j1ZV");let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[n.b,i.e,r.d,g,i.m,m.a]]}),t})()}}]);