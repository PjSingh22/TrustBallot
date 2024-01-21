// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// primary election contract
contract PrimaryContract {
  event AddVote(address recipient, uint voteId);

  struct Vote {
    uint id;
    uint voterId;
    uint congressionalCandidateId;
    uint stateCandidateId;
    uint upperStateLegislativeCandidateId;
    uint lowerStateLegislativeCandidateId;
    string congressionalCandidate;
    string stateCandidate;
    string upperStateLegislativeCandidate;
    string lowerStateLegislativeCandidate;
  }

  Vote[] public votes;
  mapping(uint256 => address) public voteToOwner;

  function addVote(
    uint _voterId,
    uint _congressionalCandidateId,
    uint _stateCandidateId,
    uint _upperStateLegislativeCandidateId,
    uint _lowerStateLegislativeCandidateId,
    string memory _congressionalCandidate,
    string memory _stateCandidate,
    string memory _upperStateLegislativeCandidate,
    string memory _lowerStateLegislativeCandidate
  ) external {
    uint id = votes.length;
    votes.push(Vote(id, _voterId, _congressionalCandidateId, _stateCandidateId, _upperStateLegislativeCandidateId, _lowerStateLegislativeCandidateId, _congressionalCandidate, _stateCandidate, _upperStateLegislativeCandidate, _lowerStateLegislativeCandidate));
    voteToOwner[id] = msg.sender;
    emit AddVote(msg.sender, id);
  }

  function getMyVotes() external view returns (Vote[] memory) {
    Vote[] memory temporary = new Vote[](votes.length);
    uint counter = 0;
    for (uint i = 0; i < votes.length; i++) {
      if (voteToOwner[i] == msg.sender) {
        temporary[counter] = votes[i];
        counter++;
      }
    }
    Vote[] memory myVotes = new Vote[](counter);
    for (uint i = 0; i < counter; i++) {
      myVotes[i] = temporary[i];
    }
    return myVotes;
  }
}
