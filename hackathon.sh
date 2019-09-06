
// Get python 3
brew install python

// get AWS cli
brew install awscli

// configure aws -- this will prompt you for credentials that
// need to be retrieved from your AWS console
// Services > Search "IAM" > Users > Add User "youremail@slalom.com" 
// and grant yourself programmatic access 

// In permissions attach existing policies directly and use Admin
// Add the following keys: 

// Key: Name 
// Value: yourname

// Key: Manager
// Value: yourmanager

// Key: Market
// Value: Build

// Key: Engagement Office
// Value: Seattle

// Key:  Email: 
// Value: youremail@slalom.com


// Review the information and create the user
// Download the .csv and enter the credentials when prompted by aws configure
aws configure

npm install -g @aws-amplify/cli

// you can now use the cli to create scaffolding in the web. Good job jerk
