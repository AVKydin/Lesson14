/* Flags 
        - g - глобальний пошук;
        - i - не чeтливість до регістру;
        - m - багаторядковий режим (^ $);
        - s - враховувати новий рядок стрічки;
        - u - включення підтримки юнікоду;
        - y - липкий пошук;
*/

// let regexp = /expression/flags;

// let regexp = new RegExp(expression, flags);

// g - глобальний пошук;
// const regExp = /ivan/g;
// const str = 'One ivan and one more ivan'

//  i - не чeтливість до регістру;
// const regExp = /ivan/gi ;
// const str = 'One ivan and one more ivaN';

// m - багаторядковий режим (^ $);
// const regExp = /^\d/gi;
// const str = `1.One ivan and
// 2.one more iVaN`;

// s - враховувати новий рядок стрічки;
// const regExp = /e.*r/s;
// const str = `one
// two
// three`;

// u - включення підтримки юнікоду;
// const regExp = /\u{1F525}/u;
// const str = 'Воген = 🔥';
// console.log(regExp.test(str));

// const regExp = /ivan/gi;
// console.log(regExp);
// console.log(regExp.flags);
// console.log(regExp.global);
// console.log(regExp.ignoreCase);
// console.log(regExp.multiline);
// console.log(regExp.unicode);
// console.log(regExp.sticky);
// console.log(regExp.lastIndex);

// () - група;
// console.log(/^(\d{3})\s(\w+)$/.test('145 s'));


// ''.match;
// /sdsa/.exec();
// '10-07-2020'
// let redExp = /^(\d{2})-(\d{2})-(\d{4})$/;
// let str = "10-07-2020";

// console.log(redExp.test(str));
// console.log(redExp.exec(str));
// let test = redExp.exec(str);
// console.log(test[1], test[2], test[3]);

// let redExp = /^(?<date>\d{2})-(?<month>\d{2})-(?<year>\d{4})$/;
// let str = "10-07-2020";
// console.log(redExp.exec(str));
// console.log(str.match(redExp));

// // let { date, month, year } = redExp.exec(str).groups;
// let { date, month, year } = str.match(redExp).groups;
// console.log(date, month, year);


// const regExp = /a(?:bc)*/;
// const regExp = /d(?=r)/;
// const regExp = /(?<=r)d/;

// \b
// \B
// const regExp = /\babc\b/;

// ''.replace;
// ''.split;
// ''.search;

// let str = "I love Chelsea and Chelsea the best and chelsea";
// let regexp = /Chelsea/gi;
// console.log(str);
// let newStr = str.replace(regexp, 'Arsenal');
// console.log(newStr);

// let str = '1.Ivan. 2.Petro. 3.Pavlo';
// let regExp = /\d{1}\./g
// console.log(str.split(" "));
// console.log(str.split(regExp));


// let str = "Lorem, ipsum dolor delit sit amet consectetur adipisicing elit.";
// let regExp = /\belit\b/i;
// console.log(str.search(regExp));

// y;
// let str = 'some my text';
// let regExp = /\w+/g;
// console.log(regExp.lastIndex);
// regExp.lastIndex = 4;
// console.log(regExp.lastIndex);


// let word1 = regExp.exec(str);
// let word1 = str.match(regExp);
// console.log(word1, regExp.lastIndex);

// let word2 = regExp.exec(str);
// console.log(word2, regExp.lastIndex);

// let word3 = regExp.exec(str);
// console.log(word3, regExp.lastIndex);

// (?<date>\d{2})
// /^[a-zA-Z0-9\.\_\-]{4,16}$/;


let loginRegExp = /^[a-zA-Z]{4,16}$/;
let passwordRegExp = /^[a-zA-Z0-9\.\_\-]{4,16}$/;   
let emailRegExp = /\w*\d*\.*@\w*.\w*/;
let getId = (id) => document.getElementById(id);
let login;
let password;
let email;
let user;
let arrUser = [];
let tr;
let edit;
let userIndex;

//  function   render()    
let render = function () {
        getId("tableBody").innerHTML = '';

        for (let i = 0; i < arrUser.length; i++) {
          tr = document.createElement("tr");
          tr.innerHTML = `<td>${i + 1}</td>
                            <td>${arrUser[i].userLogin}</td>
                            <td>${arrUser[i].userPassword}</td>
                            <td>${arrUser[i].userEmail}</td>
                            <td><input type='button' id='btnEdit' class='btnEdit btn' name='edit' value='Edit'></td>
                            <td><input type='button' id='btnDelete' class='btnDelete btn' name='delete' value='Delete'></td>`;
          getId("tableBody").append(tr);
        }
}


// btn Add user        
getId("button").onclick = function add() {
        
        if (validation() == 'ok!') {
                login = getId("login").value;
                password = getId("password").value;
                email = getId("email").value;

                user = {
                        userLogin: `${login}`,
                        userPassword: `${password}`,
                        userEmail: `${email}`,
                };
                arrUser.push(user);

                render();
                document.forms.form.reset();
        }
        
};

// incorrect data

getId("p").onclick = function () {
        getId("left").hidden = false;
        getId("right").hidden = false;
        getId("incorrect").hidden = true;
}

//btn Edit or Delete;

getId("tableBody").onclick = function (e) {
        e.target.classList.contains("btnEdit") ? userEdit(e) : e.target.classList.contains("btnDelete") ? userDelete(e) : 0;
};

// function Delete;

function userDelete(e) {
        let index = e.target.parentElement.parentElement.firstElementChild.textContent - 1;
        arrUser.splice(index, 1);
        console.log(index);
        render();
}

// function Edit;

function userEdit(e) {
        userIndex = e.target.parentElement.parentElement.firstElementChild.textContent - 1;
        edit = arrUser[userIndex];
        getId("login").value = edit.userLogin;
        getId("password").value = edit.userPassword;
        getId("email").value = edit.userEmail;
        getId("button").hidden = true;
        getId("buttonEdit").hidden = false;
        e.target.parentElement.style.background = "grey";
    
}

// btn userEdit;

getId("buttonEdit").onclick = function saveEditUser() {
        if (validation() == "ok!") {
                edit.userLogin = getId("login").value;
                edit.userPassword = getId("password").value;
                edit.userEmail = getId("email").value;
                getId("button").hidden = false;
                getId("buttonEdit").hidden = true;
                console.log(edit);
                render();
                document.forms.form.reset();
        }
};

//  validation

let validation = function () {
        loginReg = loginRegExp.test(getId("login").value);
        passwordReg = passwordRegExp.test(getId("password").value);
        emailReg = emailRegExp.test(getId("email").value);
        
        if (loginReg && passwordReg && emailReg) {
                return 'ok!'
        } else {
          getId("left").hidden = true;
          getId("right").hidden = true;
          getId("incorrect").hidden = false;
        }
}