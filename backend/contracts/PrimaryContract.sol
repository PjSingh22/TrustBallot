// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
// primary election contract
contract PrimaryContract {
  event AddVote(address recipient, uint voteId);

  struct Vote {
    uint id;
    uint congressionalCandidateId;
    uint stateCandidateId;
    uint upperStateLegislativeCandidateId;
    uint lowerStateLegislativeCandidateId;
    string congressionalCandidate;
    string stateCandidate;
    string upperStateLegislativeCandidate;
    string lowerStateLegislativeCandidate;
  }
}
