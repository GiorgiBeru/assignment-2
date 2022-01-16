// bolos console-shi object-sac bechdavs, magram tu mizani alert-it 
// mocemul momentshi ricxviti mnishvnelobis gamotana iyo mxolod, magas aketebs

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};
