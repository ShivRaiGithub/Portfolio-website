import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full h-full">
      <div
        className="flex flex-col items-center justify-center py-20"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/FateCards.png"
            title="Fate Cards"
            description="Full Stack Blockchain project where users are able to mint and trade cards in form of NFTs."
          />
          <ProjectCard
            src="/VoteContract.png"
            title="Vote Contract"
            description="Project built on Stellar blockchain using Soroban SDK that allows a user to vote."
          />
          <ProjectCard
            src="/scoin.jpg"
            title="Stablecoin"
            description="A DeFi project built and deployed on Ethereum testnet using Foundry."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
