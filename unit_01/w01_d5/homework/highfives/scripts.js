class Creature {
  constructor({name}){
    this.enthusiasm = 0;
    this.name = name;
  }
  botchHighFive () {
    this.enthusiasm = 0;
  }
}

class Person extends Creature {
  constructor(options){
    super(options);
    this.readyToHighFive = true;
  }
  switchReadyToHighFive () {
    this.readyToHighFive = !this.readyToHighFive;
  }
  nailHighFive (encouragement = 10) {
    this.enthusiasm += encouragement;
    this.switchReadyToHighFive();
  }
}

class SocialGroup {
  constructor (cliqueName) {
    this.cliqueName = cliqueName;
    this.members = [];
  }
  acceptMember ( member ) {
    this.members.push( member );
  }
  randomMember () {
    return this.members[ Math.floor(Math.random() * this.members.length) ];
  }
  mingleRandomMembers () {
    const highFiveInitiator = this.randomMember();
    const highFiveReceiver = this.randomMember();
    if ( highFiveInitiator.readyToHighFive && highFiveReceiver.readyToHighFive ){
      highFiveInitiator.nailHighFive();
      highFiveReceiver.nailHighFive();
      console.log(`Bingo!  Looks like ${ highFiveInitiator.name } nailed a highfive with ${ highFiveReceiver.name }!`);
    } else {
      highFiveInitiator.botchHighFive();
      console.log(`On No!!!  Lame! ${ highFiveInitiator.name } botched a highfive with ${ highFiveReceiver.name }!`);
    }
  }
  displayAttendance () {
    let displayReport = "~~~~ Enthusiasm Report ~~~~\n";
    for (let member of this.members) {
      displayReport += `  ${ member.name } ~ ${ member.enthusiasm }\n`
    }
    displayReport +=  "~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
    console.log(displayReport);
  }
  anotherDay () {
    this.mingleRandomMembers();
    this.displayAttendance();
  }
}

const friends = new SocialGroup('bffs');

friends.acceptMember( new Person({name: 'Lichard DeGray'}) );
friends.acceptMember( new Person({name: 'Kathew Bod'}) );
friends.acceptMember( new Person({name: 'Omily Threa'}) );
friends.acceptMember( new Person({name: 'Joy'}) );

friends.anotherDay()
