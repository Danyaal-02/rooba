# Rooba Finance Full Stack Role


## 1. Install NODE_MODULES of frontend and backend using "npm install" command

In the project directory, you can run:

### 2. Locate backend dir and start Server using "nodemon start" and after that `npm run start` to start Frontend

### TECK STACK

REACT
MONGODB
EXPRESS
NODE.js
Tailwind CSS

## Question 2: React Form with Validation

## code :- 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
      }
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
      const response = await axios.post('http://localhost:8000/user/api/login', {
        email,
        password,
      });
      console.log(response.data.user)
      if (response.data.token) {

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user._id);
        console.log('Login successful!');
        history('/');
      }
      else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  

## Question 3: REST API with Node.js and Express
Problem Statement:
Task done - Succesfully

## Question 4: Express Middleware Creation
Problem Statement:
## code :-
const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const accessToken = req.headers['authorization'] || 'No Access Token';

    console.log(`[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`);

    next();
};


## Question 5: MongoDB Data Aggregation
Problem Statement:
const response = await User.aggregate([
        {
            $group: {
                _id: null,
                totalUsers: { $sum: 1 },
                averageAge: { $avg: "$age" },
                countries: {
                    $push: {
                        country: "$country",
                        count: 1
                    }
                }
            }
        },
        {
            $unwind: "$countries"
        },
        {
            $group: {
                _id: "$countries.country",
                totalUsers: { $sum: "$countries.count" },
                averageAge: { $avg: "$averageAge" }
            }
        },
        {
            $project: {
                _id: 0,
                country: "$_id",
                totalUsers: 1,
                averageAge: 1
            }
        }
    ])





