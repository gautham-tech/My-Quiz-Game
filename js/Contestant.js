class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.distance = null;
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
      }

      updateCount(count){
        database.ref('/').update({
          contestantCount: count
        });
      }

      update(){
        var contestantIndex = "contestantCount" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      
      static getcontestantInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
          allcontestants = data.val();
        })
      }
}