/**
Author: Nguyen Nhu Hoang Tan
Release: 25/01 
Function: Bai tạp b10-js
*/

// Bai 1
// Input
// Luong 1 ngay = 100.000;
// Nhap so ngay lam

// Code
function TinhLuong(){
    var day = document.getElementById("day").value;
    var salary = day*100000;
    // Nhân chia  = > number
    var output1 = document.getElementById("output1");
    output1.innerHTML = "Lương = " + salary;
}
// output
// Lương: day*100000
// _____________________________________________________________________________-


// Bai 2
// Input
// Nhap 5 so thuc: x1 x2 x3 x4 x5

// Code
function tbt(){
    var num1 =  (document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);

    var num6 = Number(num1);    
    console.log(typeof(num6));
    console.log((num6));
    var tbt = (num1 + num2 + num3 + num4 + num5)/5
    var output2 = document.getElementById("output2"); 
    output2.innerHTML = "ĐTB = " + tbt;
}
// output
// gia tri trung bình tong: sum(x1 x2 x3 x4 x5)/5
// _____________________________________________________________________________-

// Bai 3
// Input
// Nhap tien USD

// Code
function chargeMoney(){
    var usd = document.getElementById("usd").value;
    var money = parseFloat(usd)*23500
    var output3 = document.getElementById("output3");
    output3.innerHTML = "Đổi tiền = " + money + "VNĐ";


}
// output
// Doi tu UDS => VN

// _____________________________________________________________________________-

// Bai 4
// Input
// Nhap chieu dai, chieu rong

// Code
function tinh(){
    var cd = document.getElementById("cd").value;
    var cr = document.getElementById("cr").value;
    // parseFloat(cd);
    var chuvi = ((parseFloat(cd)+parseFloat(cr))*2);
    var dientich = parseFloat(cd)*parseFloat(cr);
    console.log(typeof(Number((cd+cr)*2)));
    var output4 = document.getElementById("output4");
    output4.innerHTML = "Chu vi = " + chuvi + "<br>Dien tich =" + dientich;
}
// output
// Doi tu UDS => VN

// _____________________________________________________________________________

// Bai 5
// Input
// Nhap so co 2 chu so

// Code
function tong2ChuSo(){
    var number = parseFloat(document.getElementById("number").value);
    var donvi = Math.floor(number/10);
    var chuc = number%10;
    var tong = donvi + chuc;
    var output5 = document.getElementById("output5");
    output5.innerHTML = "Tong 2 chu so = " + tong;
}
// output
// Tong 2 so