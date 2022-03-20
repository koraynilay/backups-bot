const backup = require('discord-backup');
const config = require('../config.json');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

     try{
	    console.log("creating backup...");
	    message.channel.send('creating backup...');
	    backup.setStorageFolder(__dirname+'/../timw_bcks/');
	    backupData = await backup.create(message.guild, {
				maxMessagesPerChannel: 99999999999,
				saveImages: "base64"
				/*jsonBeautify: true*/
	    })
	    console.log("backup created");
	    message.channel.send('Backup created! Here is your ID: `'+backupData.id+'`! Use `'+config.prefix+'load-backup '+backupData.id+'` to load the backup on another server!');
    }catch(error){
	    console.log(error);
	    return message.channel.send(':x: An error occurred, please check if the bot is administrator!');
    }

};
