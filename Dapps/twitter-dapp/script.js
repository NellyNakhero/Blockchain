// --- CONFIGURATION ---
const contractAddress = "0x03a827ab41d236780dd90ac246cdb46d251d24ae";
// ABI HERE
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "author",
        "type": "address"
      }
    ],
    "name": "TweetCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "liker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "tweetAuthor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newLikesCount",
        "type": "uint256"
      }
    ],
    "name": "TweetLiked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "unliker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "tweetAuthor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newLikesCount",
        "type": "uint256"
      }
    ],
    "name": "TweetUnLiked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "actions",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_tweet",
        "type": "string"
      }
    ],
    "name": "createTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getAction",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getActionsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "getAllOwnerTweets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "author",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "likes",
            "type": "uint256"
          }
        ],
        "internalType": "struct Twitter.Tweet[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getTweet",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_author",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tweetIndex",
        "type": "uint256"
      }
    ],
    "name": "getTweetLikes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_author",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tweetIndex",
        "type": "uint256"
      }
    ],
    "name": "likeTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tweets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "author",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "likes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_author",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tweetIndex",
        "type": "uint256"
      }
    ],
    "name": "unLikeTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_action",
        "type": "string"
      }
    ],
    "name": "updateUserActionsOptions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// --- DOM ELEMENTS ---
const connectWalletBtn = document.getElementById('connect-wallet-btn');
const appContainer = document.getElementById('app');
const userAddressSpan = document.getElementById('user-address');
const tweetForm = document.getElementById('tweet-form');
const tweetContentTextarea = document.getElementById('tweet-content');
const userTweetsDiv = document.getElementById('user-tweets');

// --- GLOBAL VARIABLES ---
let signer;
let contract;

// --- EVENT LISTENERS ---
connectWalletBtn.addEventListener('click', connectWallet);
tweetForm.addEventListener('submit', createTweet);

// --- FUNCTIONS ---

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Create a provider and signer
            const provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();

            // Create contract instance
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Update UI
            const userAddress = await signer.getAddress();
            userAddressSpan.innerText = `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`;
            connectWalletBtn.style.display = 'none';
            appContainer.style.display = 'block';

            // Load initial tweets
            loadUserTweets();

        } catch (error) {
            console.error("Error connecting to wallet:", error);
            alert("Could not connect to wallet. Please ensure MetaMask is unlocked and you are on the Sepolia network.");
        }
    } else {
        alert('MetaMask is not installed. Please install it to use this dApp!');
    }
}

async function createTweet(event) {
    event.preventDefault();
    const content = tweetContentTextarea.value;

    if (!contract) {
        alert("Please connect your wallet first.");
        return;
    }

    try {
        // Send transaction to create a tweet
        const tx = await contract.createTweet(content);
        await tx.wait(); // Wait for the transaction to be mined

        // Clear form and reload tweets
        tweetContentTextarea.value = '';
        loadUserTweets();
        console.log("Tweet created successfully!");
    } catch (error) {
        console.error("Error creating tweet:", error);
        alert("Failed to create tweet. Check the console for details.");
    }
}

async function loadUserTweets() {
    if (!contract || !signer) return;

    try {
        const userAddress = await signer.getAddress();
        // Call the 'getAllOwnerTweets' view function
        const tweets = await contract.getAllOwnerTweets(userAddress);
        
        // Clear previous tweets
        userTweetsDiv.innerHTML = '';

        if (tweets.length === 0) {
            userTweetsDiv.innerHTML = "<p>You haven't tweeted yet.</p>";
            return;
        }

        // Display tweets in reverse order (newest first)
        for (let i = tweets.length - 1; i >= 0; i--) {
            const tweet = tweets[i];
            const tweetElement = document.createElement('div');
            tweetElement.className = 'tweet';

            const date = new Date(Number(tweet.timestamp.toString()) * 1000); // Convert timestamp to date

            tweetElement.innerHTML = `
                <div class="tweet-header">You</div>
                <div class="tweet-content">${tweet.content}</div>
                <div class="tweet-footer">
                    <span>${date.toLocaleString()}</span>
                    <div>
                        <span>Likes: ${tweet.likes}</span>
                        <button class="like-btn" data-author="${tweet.author}" data-index="${i}">Like</button>
                        <button class="unlike-btn" data-author="${tweet.author}" data-index="${i}">Unlike</button>
                    </div>
                </div>
            `;
            userTweetsDiv.appendChild(tweetElement);
        }

        // Add event listeners for the new like/unlike buttons
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const author = btn.dataset.author;
                const index = btn.dataset.index;
                likeTweet(author, index);
            });
        });

        document.querySelectorAll('.unlike-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const author = btn.dataset.author;
                const index = btn.dataset.index;
                unLikeTweet(author, index);
            });
        });

    } catch (error) {
        console.error("Error loading tweets:", error);
    }
}

async function likeTweet(author, index) {
    if (!contract) return;
    try {
        const tx = await contract.likeTweet(author, index);
        await tx.wait();
        loadUserTweets(); // Reload to update the like count
    } catch (error) {
        console.error("Error liking tweet:", error);
        alert("Failed to like tweet.");
    }
}

async function unLikeTweet(author, index) {
    if (!contract) return;
    try {
        const tx = await contract.unLikeTweet(author, index);
        await tx.wait();
        loadUserTweets(); // Reload to update the like count
    } catch (error) {
        console.error("Error unliking tweet:", error);
        alert("Failed to unlike tweet.");
    }
}