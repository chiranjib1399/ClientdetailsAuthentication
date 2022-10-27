const db = require('../util/database');

module.exports = class Clientdetails{
    constructor(clientname, clientPhonenumber,address,email){
        this.clientname=clientname;
        this.clientPhonenumber=clientPhonenumber;
        this.address=address;
        this.email=email;
        
    };
     
  static fetchAll(){
    return db.execute('SELECT* FROM clientdetails ');
  }
    

    static save(clientdetail) {                                    
    return db.execute('INSERT INTO clientdetails (clientname, clientPhonenumber,address,email) VALUES (?,?,?,?)',
     [clientdetail.clientname, clientdetail.clientPhonenumber,clientdetail.address,clientdetail.email]
    )

    }             
};

