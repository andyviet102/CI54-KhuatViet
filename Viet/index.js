  
import { Student } from './student.js'
import { StudentCollection } from './studentCollection.js'
import './cardStudent.js'
const studentCollection = new StudentCollection()
studentCollection.addStudent(new Student('58A', 'viet', 18, 'Son Tay'))
studentCollection.addStudent(new Student('58B', 'lam', 18, 'Ha Noi'))
studentCollection.addStudent(new Student('58C', 'tung', 18, 'Tay Nguyen'))
let c= new Student('58A', 'viet', 18, 'Son Tay');

//studentCollection.getInfo() lớp StudentCollection không có phương thức get infor, get infor là phương thức của lơp student
let fifTeen= studentCollection.getStudentByAge(18) // phương thức (hoặc hàm ) trả về giá trị thì phải truyền vào một biến
let eighTeenplus= studentCollection.getStudentByAgeAndAddress(18, "Hanoi")
let TVB= studentCollection.getStudentByName("Trinh van B")
let container= document.getElementsByClassName("container");

//đưa ra màn hình, nhác quá  nên ko làm hàm, chỉ lấy 1 cái làm ví dụ
for(let i=0; i<fifTeen.length; i++)
{
    console.log(fifTeen[i].getInfo());
    container[0].insertAdjacentHTML('beforeend', fifTeen[i].getInfo() );
}
console.log(studentCollection);
