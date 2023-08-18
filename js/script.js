//  first comment  ความรู้พื้งต้น

/*
  console.log('Hello Word');

   document.getElementById("text").innerHTML = "Ronnayod Chueasung";

   document.write("Hello docment write");

   window.alert("Hello alert box");
*/

/*
var x = 5;
var y = 6;
var z = x + y;

console.log(z);
*/

/* เชื่อมต่อข้อความ เชื่อมต่อstring 
var FirsName = "Ronnayod";
var LastName = "Chueasung";
var FullName = FirsName +" "+LastName ;

console.log(FullName);
*/



// Operators

/*
    Opperatore คือ เครื่องหมายต่างๆที่เอาไว้ใช้ทำการคำนวณทางคณิตศาสตร์หรือตรรกะ
    ก่อนขึ้นเรื่อง operatore ควรเข้าใจชนิดพื้นฐานของตัวแปร

    number (ตัวเลข) เช่น 10, 5.555
    string (ตัวอักษร) เช่น "abcd", "5.555" <- สังเกตว่ามี " " ครอบตัวแปลที่เป็นสตริงเสมอ
    boolean (ค่าความเป็นจริง) คือ true หรือ false
*/



// Arithmetic operators

/*
    +  บวก                      console.log(4 + 2); // ได้ 6
    -  ลบ                       console.log(4 - 2); // ได้ 2
    *  คูณ                       console.log(4 * 2); // ได้ 8
    /  หาร                       console.log(4 / 2); // ได้ 2
    ** ยกกำลัง                    console.log(4 ** 2); // ได้ 16
    %  โมคูลัส หาค่าเศษจากหาร       console.log(10 % 3); // ได้ 1
    ++ +1 กับตัวแปรท่ถูกดำเนินการ
       เขียนได้สองแบบ x++ และ ++x
       x++ จะให้ค่า x ก่อนบวก
       ++x จะให้ค่า x หลังบวก

       var x = 10;
       console.log( x++ ); // ได้ 10
       console.log( x ); // ได้ 11
       var y = 10;
       console.log( ++y ); // ได้ 11
       console.log( y ); // ได้ 11

    -- -1 กับตัวแปรที่ถูกดำเนิการ
       เขียนได้สองแบบคือ x-- และ --x กฎเกณฑ์เหมือน ++

       var x = 10;
       console.log( --x ); // ได้ 9
*/



// Comparison operators

/*
    == และ ===      เท่ากับ
    != และ !==      ไม่เท่ากับ
    >               มากกว่า
    >=              มากกว่าหรือเท่ากับ
    <               น้อยกว่า
    <=              น้อยกว่าหรือเท่ากับ

    ตัวอย่าง:
    console.log( 1 === 1 ); // ได้ true
    console.log( 2 <= 1 ); // ได้ false
*/

// Assignment operators

/*
    x = y             x = y
    x += y            x = x + y
    x -= y            x = x - y
    x *= y            x = x * y
    x /= y            x = x / y

    ตัวอย่าง
    Let a = 10;
    a += 5
    console.log(a); ไก้ 15
*/



// Logical operators
/*
    Logical operators ทั่วไปจะใช้เปรียบเทียบระหว่าง boolean
    ใน JavaScript มี logical operators คือ && (และ) กับ || (หรือ)

    ตัวอย่าง
    console.log( true && true ); // ได้ true
    console.log( true && false ); // ได้ false
    console.log( true || false ); // ได้ true
    console.log( false || false); // ได้ false

    && จะถูกคำนวนก่อน ||
    สามารถใช้วงเล็บบอกลำดับการเปรียบเทียบได้

    ตัวอย่าง
    conlose.log( false && true || true ); // ได้ true
    conlose.log( false && (true || true) ); // ได้ false

    หากมีโลจิกที่ซับซ้อน แนะนำให้ครอบวงเล็บให้ชัดเจน
*/



// function

/*
  function myfunction(value1, value2) {
    return value1 * value2;
  }
  console.log(myfunction(5, 5));
*/

/* เปลี่ยนสีพื้นหลังด้วย browser
function changeBg(){
  document.body.style.backgroundColor = "red";
}
changeBg();
*/

/* ลูกเล่นปุ่มหน้าเว็บ
function changeBg(){
  document.body.style.backgroundColor = "red";
}
*/

/*โปรแกรมแปลงอุณหภูมิ

  function cToF(celsius){
    var cTemp = celsius;
    var ctoFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C is " + ctoFahr + "\xB0F";
    console.log(message);
  }

  cToF(30);

  function fToC(fahrenheit){
    var fTemp = fahrenheit;
    var ftoCel = (fTemp - 32) * 5 /9;
    var message = fTemp + "\xB0F is " + ftoCel + "\xB0C";
    console.log(message);
  }

  fToC(86);
*/



// Object
/*
    var myCar = {
      brand: "Ford",
      model: "1",
      color: "black"
  };

  // เข้าถึง poppoty ได้ 2 วิธี

  console.log(myCar.brand);

  console.log(myCar["brand"]);
*/



// วิธีการสร้าง เมเสิด  เมเสิด ตือ function แต่ว่ามาใช้ใน Object เรียกว่า เมเสิด หรือ Method
   
/*
  var person = {
  firsName: "Ronnayod",
  lastName: "Chueasung",
  eyeClor: "black",
  fullName: function(){
      return this.firsName + " " + this.lastName
  }
};

console.log(person.fullName());
*/



// Event
/* แบบที่2
function displayDate(){
  document.getElementById('demo').innerHTML = Date();
}
*/




// sting
/*
  var x = "Ronnayod\"gaen\"Chueasung";

  console.log(x);
  console.log(x.length);

*/



// Array
/*
  // Array Literal
    var myArr = [
      "BMW",
      "Ford",
      "Honda"
    ];

  // Array Constructor
    var myArr2 = new Array("BMW","Ford","Honda");

    console.log(myArr);
    console.log(myArr2);

  // การเข้าถึงข้อมูลใน Array
    var myArr = [
      "BMW",
      "Ford",
      "Honda"
    ];
    console.log(myArr[0]);
    console.log(myArr.length);
*/

// เมเสิด Array
/*
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    //document.getElementById('demo').innerHTML = fruits.toString();
    //document.getElementById('demo').innerHTML = fruits.join(" - ");
    
    // ลบจากด้านหลังสุด
    fruits.pop();
    console.log(fruits);

    // เพิ่มจากด้านหลังสุด
    fruits.push("Kiwi");
    console.log(fruits);

    // ลบจากด้านหน้าสุด
    fruits.shift();
    console.log(fruits);

    // เพิ่มจากด้านหน้าสุด
    fruits.unshift("Lamon");
    console.log(fruits);

    // เปลี่ยนข้อมูลใน Array
    fruits[0] = "Kiwi";
    console.log(fruits);

    // ใช้ในการลบข้อมูลใน Array
    delete fruits[0];

    // ใช้ในการเพิ่มข้อมูลใน Array แบบ splice
    fruits.splice(2, 0, "Lemon", "Kiwi");

    // การลบด้วย splice
    fruits.splice(0, 1);
*/

    

   

   