self.addEventListener('message', messageRecived)

function messageRecived(message){
    console.log('messaggio ricevuto dal worker:', message.data);
   
}
postMessage('eccomi, sono pronto')