function Student(firstName, scores) {
  this.firstName = firstName
  this.scores = scores
  this.averageScore = function() {
    var sum = this.scores.reduce(function(prev, current) {
      return prev + current
    })
    return Math.floor(sum / this.scores.length)
  }
  this.letterGrade = function() {
    var average = this.averageScore()
    switch(true) {
      case (average >= 90):
        return "A";
      case(average >= 80 && average < 90):
        return 'B';
      case(average >= 70 && average < 80):
        return 'C';
      case(average >= 60 && average < 70):
        return 'D';
      case(average < 60):
        return 'F';
    }
  }
}


function Classroom(students) {
  this.students = students
}

Classroom.prototype.find = function(name) {
  for (var i = 0; i < this.students.length; i++) {
    if (name === this.students[i].firstName) {
      return this.students[i]
    };
  }
}

Classroom.prototype.honorRollStudents = function() {
  var array = []
  for (var i = 0; i < this.students.length; i++) {
    if (this.students[i].averageScore() >= 95) {
      array.push(this.students[i])
    };
  }
  return array
}



