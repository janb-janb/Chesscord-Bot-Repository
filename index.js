const { CommandoClient } = require('discord.js-commando');
const { Mongoose } = require('mongoose');
const path = require('path');

const mongo = require('./util/mongo')

const client = new CommandoClient({
	commandPrefix: '.',
  owner: '567711136997441536'
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		    ['challenge-cmds', 'List of challenge commands!'],
        ['misc', 'List of misc commands!'],
        ['schemas', 'List of schemas!'],
        ['opening-cmds', 'List of opening commands!'],
        ['events', 'List of big chess events!'],
        ['embed', 'Includes embed command!'],
        ['puzzles', 'All puzzle commands!'],
        ['puzzle hints', 'All the puzzle hints from "puzzles" folder!']
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
    help: false,
  })
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
    client.once('ready', async () => {
        console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
        client.user.setActivity('Version 0.2! Puzzles are here!');

        await mongo().then((mongoose) => {
            try {
              console.log('Connected to mongo!')
            } finally {

            }
          })
        })
    
    client.on('error', console.error);
    client.login('NzcwMzU4OTY1NjUzNDcxMjMy.X5casQ.W2OmkEmdGBDWrkSKJYCEz97POVc');