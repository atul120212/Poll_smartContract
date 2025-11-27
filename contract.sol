// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimplePoll {

    // Poll details (fixed, no input on deployment)
    string public pollQuestion = "Which option do you support?";
    string public optionA = "Option A";
    string public optionB = "Option B";

    // Vote counts
    uint public votesA;
    uint public votesB;

    // Track who already voted
    mapping(address => bool) public hasVoted;

    // Function to vote for Option A
    function voteA() public {
        require(!hasVoted[msg.sender], "You have already voted!");
        hasVoted[msg.sender] = true;
        votesA++;
    }

    // Function to vote for Option B
    function voteB() public {
        require(!hasVoted[msg.sender], "You have already voted!");
        hasVoted[msg.sender] = true;
        votesB++;
    }

    // Helper function to get full poll details
    function getPollDetails() public view returns(
        string memory,
        string memory,
        string memory,
        uint,
        uint
    ) {
        return (pollQuestion, optionA, optionB, votesA, votesB);
    }
}
