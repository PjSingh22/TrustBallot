// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract GeneralContract {
  event AddVote(address recipient, uint voteId);

  struct Vote {
    uint id;
    uint year;
    uint congressionalCandidateId;
    uint stateCandidateId;
    uint upperStateLegislativeCandidateId;
    string congressionalCandidate;
    string stateCandidate;
    string upperStateLegislativeCandidate;
  }

  Vote[] public votes;
  mapping(uint256 => address) public voteToOwner;
}
