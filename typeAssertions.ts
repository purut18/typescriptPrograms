let message;

message = 'abc';

// we don't get editor's intellisense
// when variable type is any
let endsWithC = message.endsWith('c');

// so you can tell the  editor the type specifically
let endsWithD = (<string>message).endsWith('d');
let alternativeWway = (message as string).endsWith('d');
