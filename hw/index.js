const student1 = new Student("Khuat van A", "58A",19,  "Son Tay")
const student2 = new Student("Trinh van B","58B", 18, "Ha Noi")
const student3 = new Student("Nguyen thi C","58C", 17, "Tay Nguyen")
const student4 = new Student("Ha chi Nhan","18D", 16, "Lao cai")
const student5 = new Student("han an ngu","58E", 15, "sai gon")

const class518 = new ClassName('518A')
class518.addStudent(student1)
class518.addStudent(student2)
class518.addStudent(student3)
class518.addStudent(student4)
class518.addStudent(student5)

student1.showInfo()
student2.showInfo()
student3.showInfo()
student4.showInfo()
student5.showInfo()

class518.showAddressAndAge(18,'Ha Noi')
class518.showAddressAndAge(19,'Son Tay')
class518.showAge(15)
class518.showName('Ha chi Nhan')

console.log(class518.showAddressAndAge(18,'Ha Noi'))