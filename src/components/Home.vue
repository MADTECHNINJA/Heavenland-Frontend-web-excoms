<template>
  <div class="div3 flex flex-col items-center w-full">
    <section class="relative pb-0 pt-0 md:pt-auto" id="home">
      <img class="hidden md:block md:-mt-10 lg:-mt-24" alt="Side" src="../assets/home/desktop.png" />
      <img class="md:hidden mt-10" alt="Side" src="../assets/home/phone2.png" />
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2 top-[60%] left-1/2 md:translate-x-0 md:translate-y-0 flex md:left-auto items-center flex-col md:-top-5 md:top-6 lg:top-[15%] xl:top-[35%] md:right-16 lg:right-40 xl:right-56 2xl:right-96"
      >
        <div class="rotate w-fit mt-20 flex flex-col items-center relative pl-2 border-main border-l-2 pl-4">
          <h1 class="text-white text-3xl md:text-3xl lg:text-4xl">WE ARE</h1>
          <h1 class="text-6xl md:text-auto text-main">Excom</h1>
          <h1 class="text-6xl md:text-auto text-pink">Society</h1>
        </div>
        <div class="mt-[2rem] md:mt-10 lg:mt-10 flex-col items-center">
          <p class="font-bold mt-2 md:mt-0 text-center">Society that should</p>
          <p class="font-bold text-center ml-8 lg:ml-16">have never existed</p>
        </div>
      </div>
    </section>
    <section id="about">
      <h1 class="text-center">About</h1>
      <p class="px-5 md:px-0 mx-auto md:w-2/3 md:text-center xl:w-1/2 mt-5 md:mt-8">
        From the dust of a burning world, society and the NFT market where pure faith was the only thing that remained left, Excom Society was born. Their
        purpose was as simple as web3 itself. To bring faith and powerful tool for everyone admiring Solana NFT space to grasp their opportunity to shine in
        virtual space, be part of the changing world and powerful DAO which will decide how big Excom Society will grow. The Excoms will not be alone in this
        fight but successfully onboarded the Heavenland Team into the Advisory board to successfully achieve all the goals.
      </p>

      <div class="relative">
        <div
          class="opacity-100 absolute top-[25%] md:top-[55%] lg:top-[75%] xl:top-[65%] 2xl:top-[65%] 3xl:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:block md:-mt-10 z-10 lg:-mt-24 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            class="relative gradient-border z-30 w-48 h-48 rounded-full md:w-32 md:h-32 lg:w-[10rem] lg:h-[10rem] xl:w-[14rem] xl:h-[14rem] 2xl:w-[18rem] 2xl:h-[18rem] 3xl:w-[28rem] 3xl:h-[28rem]"
          >
            <img
              alt="Gif"
              class="w-48 h-48 rounded-full object-none 3xl:object-cover md:w-32 md:h-32 lg:w-[10rem] lg:h-[10rem] xl:w-[14rem] xl:h-[14rem] 2xl:w-[18rem] 2xl:h-[18rem] 3xl:w-[28rem] 3xl:h-[28rem]"
              src="../assets/about/300.gif"
            />
          </div>
        </div>

        <img class="hidden md:block mt-20 w-screen" alt="Side" src="../assets/about/about.png" />
        <img class="md:hidden mt-5 md:mt-8" alt="Side" src="../assets/about/phone.png" />
        <img class="md:hidden" alt="Side" src="../assets/about/phoneBellow.png" />
      </div>
    </section>

    <!--   <section id="staking">
      <h1 class="text-center">Staking</h1>
      <p class="px-5 md:px-0 mx-auto md:w-2/3 md:text-center xl:w-1/2 mt-5 md:mt-8">
        From the dust of a burning world, society and the NFT market where pure faith was the only thing that remained left, Excom Society was born. Their
        purpose was as simple as web3 itself. To bring faith and powerful tool for everyone admiring Solana NFT space to grasp their opportunity to shine in
        virtual space, be part of the changing world and powerful DAO which will decide how big Excom Society will grow. The Excoms will not be alone in this
        fight but successfully onboarded the Heavenland Team into the Advisory board to successfully achieve all the goals.
      </p>
    </section> -->

    <section id="utility" class="md:pb-0">
      <div class="md:flex">
        <img class="md:w-1/2 md:h-1/2 aspect-square hidden md:block border-main border md:-ml-5" alt="Side" src="../assets/utility/solana.jpg" />

        <div class="mx-auto">
          <div class="px-5 md:mx-14 flex-col flex flex-grow items-stretch md:w-1/2 lg:w-2/3 2xl:w-1/2">
            <h1 class="text-center md:text-left">Utility</h1>

            <p class="text-left mt-8">
              Collection of Excom Society aims to provide its holders several utilities, advantages in Solana NFT space and passive income by earning its own
              token via Staking and getting part of the royalties.
            </p>
            <div class="hidden xl:block">
              <p class="my-4">As an Excom holder you can expect to get access to:</p>
              <ul class="list-disc list-outside px-5">
                <li class="my-1">PFP collection</li>
                <li class="my-1">Access to Data Analytics Tools</li>

                <li class="my-1">
                  Integration and a Verified Collection in <br />
                  Heavenland
                </li>
                <li class="my-1">Staking</li>
                <li class="my-1">Upgrading</li>
                <li class="my-1">$GENZ token</li>
                <li class="my-1">Share of the royalties</li>
                <li class="my-1">Merch</li>
                <li class="my-1">Liquidity Pool set up from raised SOL</li>
                <li class="my-1">Floor Sweeping & burn NFTs</li>
                <li class="my-1">DAO voting</li>
                <li class="my-1">Building a brand inside of web3 and metaverse ecosystems</li>
              </ul>

              <!--  <p class="mt-4">
                    Details in Litepaper here. <a target="_blank" href="./litepaper.pdf" title=""><i class="fa-solid ml-2 text-pink fa-download"></i> </a>
                  </p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col px-5 md:px-0 md:flex items-center justify-center xl:hidden lg:w-full">
        <ul class="list-disc list-outside px-5">
          <p class="my-4 mt-8 -ml-5 w-full">As an Excom holder you can expect to get access to:</p>

          <li class="my-1">PFP collection</li>
          <li class="my-1">Access to Data Analytics Tools</li>
          <li class="my-1">
            Integration and a Verified Collection in <br />
            Heavenland
          </li>
          <li class="my-1">Staking</li>
          <li class="my-1">Upgrading</li>
          <li class="my-1">$GENZ token</li>
          <li class="my-1">Share of the royalties</li>
          <li class="my-1">Merch</li>

          <li class="my-1">Floor Sweeping & burn NFTs</li>
          <li class="my-1">Liquidity Pool set up from raised SOL</li>
          <li class="my-1">DAO voting</li>
          <li class="my-1">Building a brand inside of web3 and metaverse ecosystems</li>
          <!-- <p class="mt-4 -ml-5 mb-5 text-left md:mb-0">
                Details in Litepaper here.
  
                <a target="_blank" href="./litepaper.pdf" title=""><i class="fa-solid ml-2 text-pink fa-download"></i> </a>
              </p> -->
        </ul>

        <img class="md:w-1/2 md:h-1/2 md:hidden border-main border aspect-square" alt="Side" src="../assets/utility/solana.jpg" />
      </div>
    </section>
    <section class="px-5 md:px-0 md:flex flex-col items-center" id="roadmap">
      <h1 class="text-center">Roadmap</h1>
      <div class="xl:hidden mt-8 relative">
        <div class="absolute right-[8.75rem] bg-main h-[5.5rem] w-4"></div>
        <div class="w-[160px] pt-[75px] md:pt-0 md:mt-[75px] lg:ml-3 lg:-mr-2">
          <h3 class="font-bold text-lg">5/2022</h3>
          <p class="text-white text-xs">Excom Society idea was born</p>
        </div>
        <div class="absolute right-[16rem] top-[4.9rem] md:right-[27.5rem] lg:right-[26.5rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute hidden ic:block right-[8.75rem] w-[7.5rem] md:w-[19.25rem] lg:w-[18rem] h-[1px] bg-main top-[5.5rem]"></div>
        <div class="absolute right-[7.5rem] bg-blue top-0 h-[13.1rem] w-4"></div>
        <div class="w-[140px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold text-blue mt-[75px] text-lg">6/2022</h3>
          <p class="text-white text-xs">First graphic drafts</p>
        </div>

        <div class="absolute right-[16rem] top-[12.5rem] md:right-[27.5rem] lg:right-[26.5rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute hidden ic:block right-[7.5rem] w-[8.5rem] md:w-[20.5rem] lg:w-[19rem] h-[1px] bg-blue top-[13.1rem]"></div>
        <div class="absolute right-[6.25rem] bg-indigo top-0 h-[20.3rem] w-4"></div>
        <div class="w-[180px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold text-indigo mt-[75px] text-lg">7/2022</h3>
          <p class="text-xs text-white">
            Social profiles set up<br />
            Website launch<br />
            Formed partnerships with Metaverse projects<br />
            First sneakpeeks<br />
          </p>
        </div>
        <div class="absolute right-[16rem] md:right-[27.5rem] lg:right-[26.5rem] top-[19.7rem] rounded-full h-5 w-5">
          <img class="h-full w-full hidden ic:block z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute hidden ic:block right-[6.25rem] w-[10.5rem] md:w-[22rem] lg:w-[21rem] h-[1px] bg-indigo top-[20.3rem]"></div>
        <div class="absolute right-[5rem] bg-pink top-0 h-[27.85rem] w-4"></div>
        <div class="w-[180px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold mt-[12px] md:mt-[28px] text-pink text-lg">8/2022</h3>
          <p class="text-xs text-white md:w-[33rem]">Heavenland official cooperation announcement</p>
        </div>
        <div class="absolute right-[16rem] md:right-[27.5rem] lg:right-[26.5rem] top-[27.25rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute right-[5rem] hidden ic:block w-[11.25rem] md:w-[23rem] lg:w-[22rem] h-[1px] bg-pink top-[27.85rem]"></div>
        <div class="absolute right-[3.75rem] bg-purple top-0 h-[35.3rem] w-4"></div>
        <div class="w-[200px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold text-purple mt-[60px] md:mt-[74px] text-lg">9/2022</h3>
          <p class="text-xs text-white">
            Tokenomics paper release<br />
            IDO platform announcement<br />
          </p>
        </div>
        <div class="absolute right-[16rem] md:right-[27.5rem] lg:right-[26.5rem] top-[34.7rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute hidden ic:block right-[3.75rem] w-[12.75rem] md:w-[24rem] lg:w-[23rem] h-[1px] bg-purple top-[35.3rem]"></div>
        <div class="absolute right-[2.5rem] top-0 bg-main h-[41.7rem] w-4">
          <img class="h-full w-full z-50 absolute" src="../assets/roadmap/cyan.png" />
        </div>
        <div class="w-[220px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold mt-[40px] md:mt-[42px] text-lg">10/2022</h3>
          <p class="text-xs text-white">
            IDO launch<br />
            $GENZ token release<br />
            $GENZ token listed on DEX<br />
            Paragon NFT integration<br />
            Staking launch<br />
            Acquiring HL parcel<br />
            First royalties reward distribution<br />
            Excoms upgrade system<br />
            NFT airdrop<br />
            Heavenmarket listing<br />
          </p>
        </div>
        <div class="absolute right-[15.5rem] md:right-[26.75rem] lg:right-[26.5rem] top-[41.1rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute hidden ic:block right-[2.5rem] w-[13.5rem] md:w-[25rem] lg:w-[24.5rem] h-[1px] bg-main top-[41.7rem]"></div>
        <div class="absolute right-5 bg-blue top-0 h-[56.5rem] w-4"></div>
        <div class="w-[240px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold mt-[50px] text-blue text-lg">11/2022</h3>
          <p class="text-xs text-white pb-1">
            First DAO voting<br />
            New $GENZ listings<br />
            New partnerships<br />
          </p>
        </div>
        <div class="absolute right-[15.5rem] md:right-[26.75rem] lg:right-[26.5rem] xl top-[56rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute hidden ic:block right-5 w-[15rem] md:w-[26.4rem] h-[1px] bg-blue top-[56.5rem]"></div>
        <div class="absolute right-0 bg-indigo top-0 h-[64rem] w-4"></div>
        <div class="w-[260px] lg:ml-3 lg:-mr-2 md:w-3/4">
          <h3 class="font-bold mt-[40px] text-indigo text-lg">12/2022</h3>
          <p class="text-xs text-white">Data Analytics Tools</p>
          <p class="text-xs text-white">Merch release</p>
        </div>
        <div class="absolute right-[15.5rem] md:right-[26.5rem] top-[63.5rem] rounded-full h-5 w-5">
          <img class="h-full hidden ic:block w-full z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="absolute right-[0rem] hidden ic:block w-[16rem] md:w-[27rem] lg:w-[26.5rem] h-[1px] bg-indigo top-[64rem]"></div>

        <div class="relative">
          <h3 class="font-bold md:mt-0 text text-right text-lg">2023</h3>
          <p class="text-xs text-right text-white w-full">
            Collaboration expansion<br />
            Building Continental hotel in HL<br />
            All Excoms get their safe haven in HL metaverse<br />
          </p>
        </div>
      </div>
      <div class="relative hidden xl:block">
        <div class="bg-main absolute -left-[9.75rem] lg:-left-[14.5rem] top-24 lg:top-32 h-1.5 lg:h-2 w-40 lg:w-[15rem]">
          <div class="text-right absolute -left-[14rem] lg:-left-[16rem] -top-2">
            <h3 class="font-bold text-lg">5/2022</h3>
            <p class="text-white text-base">Excom Society idea was born</p>
          </div>
          <img class="h-8 m-2 -left-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-blue absolute left-3 lg:left-8 top-48 lg:top-[16rem] z-30 h-1.5 lg:h-2 w-40 lg:w-[17rem]">
          <div class="text-left absolute left-3 w-full lg:left-[19.75rem] -top-2">
            <h3 class="font-bold text-blue text-lg">6/2022</h3>
            <p class="text-white text-base">First graphic drafts</p>
          </div>

          <img class="h-8 m-2 -right-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-indigo absolute lg:-left-[14.5rem] -left-[9.75rem] top-[18rem] lg:top-[24rem] z-30 h-1.5 lg:h-2 w-[11.25rem] lg:w-[17.5rem]">
          <div class="text-right absolute -left-[9.75rem] lg:-left-[23rem] -top-2">
            <h3 class="font-bold text-indigo text-lg">7/2022</h3>
            <p class="text-base text-white">
              Social profiles set up<br />
              Website launch<br />
              Formed partnerships with Metaverse projects<br />
              First sneakpeeks<br />
            </p>
          </div>

          <img class="h-8 m-2 -left-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-pink absolute lg:left-[4.5rem] left-8 top-[24rem] lg:top-[32rem] z-30 h-1.5 lg:h-2 w-[8.75rem] lg:w-[14.5rem]">
          <div class="text-left absolute left-3 w-full lg:left-[17.25rem] -top-2">
            <h3 class="font-bold text-pink text-lg">8/2022</h3>
            <p class="text-base text-white">Heavenland official cooperation announcement</p>
          </div>

          <img class="h-8 m-2 -right-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-purple absolute -left-[9.75rem] lg:-left-[14.5rem] top-[30rem] lg:top-[40rem] z-30 h-1.5 lg:h-2 w-[12.5rem] lg:w-[20rem]">
          <div class="text-right absolute -left-[9.75rem] lg:-left-[15.5rem] -top-2">
            <h3 class="font-bold text-purple text-lg">9/2022</h3>
            <p class="text-base text-white">
              Tokenomics paper release<br />
              IDO platform announcement<br />
            </p>
          </div>
          <img class="h-8 m-2 -left-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-main absolute lg:left-[0.5rem] top-[36rem] lg:top-[48rem] z-30 h-1.5 lg:h-2 w-[10.5rem] lg:w-[18.5rem]">
          <div class="text-left absolute left-3 w-full lg:left-[21.25rem] -top-2">
            <h3 class="font-bold text-lg">10/2022</h3>
            <p class="text-base text-white">
              IDO launch<br />
              $GENZ token release<br />
              $GENZ token listed on DEX<br />
              Paragon NFT integration<br />
              Staking launch<br />
              Acquiring HL parcel<br />
              First royalties reward distribution<br />
              Excoms upgrade system<br />
              NFT airdrop<br />
              Heavenmarket listing<br />
            </p>
          </div>
          <img class="h-8 m-2 -right-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-blue absolute -left-[9.75rem] lg:-left-[14.5rem] top-[42rem] lg:top-[58rem] z-30 h-1.5 lg:h-2 w-[10.75rem] lg:w-[16.25rem]">
          <div class="text-right absolute -left-[9.75rem] lg:-left-[11.75rem] -top-2">
            <h3 class="font-bold text-lg text-blue">11/2022</h3>
            <p class="text-base text-white">
              First DAO voting<br />
              New $GENZ listings<br />
              New partnerships<br />
            </p>
          </div>

          <img class="h-8 m-2 -left-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <div class="bg-indigo absolute left-6 lg:left-[3.25rem] top-[48rem] lg:top-[68rem] z-30 h-1.5 lg:h-2 w-[9rem] lg:w-[15.75rem]">
          <div class="text-left absolute left-3 w-full lg:left-[18.5rem] -top-2">
            <h3 class="font-bold text-indigo text-lg">12/2022</h3>
            <p class="text-base text-white">Data Analytics Tools</p>
            <p class="text-base text-white">Merch release</p>
          </div>
          <img class="h-8 m-2 -right-8 -top-5 z-50 absolute" src="../assets/faq/excom.png" />
        </div>
        <img class="md:w-12 lg:w-24 mx-auto lg:h-2/3 mt-12" src="../assets/roadmap/roadmap.png" />
      </div>

      <div class="hidden lg:block xl:-mt-[31rem] text-center relative w-full mr-5 2xl:mr-0 mt-5">
        <h3 class="font-bold text-lg pl-5 2xl:pl-0">2023</h3>
        <p class="text-white w-full">
          Collaboration expansion<br />
          Building Continental hotel in HL<br />
          All Excoms get their safe haven in HL metaverse<br />
        </p>
      </div>
      <h2 class="mt-8 text-center">Excom Society & Heavenland team</h2>
      <p class="mx-auto pt-8 md:w-2/3 md:text-center xl:w-1/2">
        The team consists of 5 leaders focused on web3, marketing, communication, Solana blockchain and brand awareness that have spent years developing their
        own blockchain solutions and tokens. In addition to that, Excom Society successfully onboarded the Heavenland team to become part of the Advisory board.
        Heavenland is the most promising Metaverse that successfully launched 3 collections (Parcels, Loyalty NFTs and Alphas) and keeps building the virtual
        world with an incredible speed. The team has a great deal of experience in NFT space and web3 in general and will play a key role in Excom Society
        business development, IT advising, marketing and other.
      </p>

      <h2 class="mt-10 mb-6 text-center">Excom Society</h2>
      <div class="grid mx-6 md:mx-auto grid-cols-2 md:flex justify-center">
        <div class="flex mx-auto" v-for="member in state.teams.excom" :key="member.name">
          <img class="h-44 lg:h-52 mx-2" :src="'./teams/' + member.image + '.png'" />
        </div>
      </div>
      <h2 class="mt-10 md:mt-10 mb-2 md:mb-4 text-center">Heavenland team</h2>
      <div class="grid mx-6 md:mx-auto grid-cols-2 md:flex justify-center mt-0">
        <div class="flex mx-auto" v-for="member in state.teams.heavenland" :key="member.name">
          <img class="h-44 lg:h-52 mx-2" :src="'./teams/' + member.image + '.png'" />
        </div>
      </div>
    </section>
    <section class="relative lg:mt-20 3xl:mt-40 w-full" id="excom">
      <!--   <div class="absolute top-3 bottom-3 z-20 w-full bg-black"></div> -->

      <!--   <img class="w-full hidden lg:h-[4.4rem] xl:h-[6rem] 2xl:h-[9rem] 3xl:h-[18rem] lg:block relative" alt="Side" src="../assets/partners/gradient.png" /> -->

      <div class="flex z-50 my-border border-t-[10px] border-b-[10px] lg:border-t-[20px] lg:border-b-[20px] absolute md:top-3 lg:top-0 justify-center">
        <div class="hidden relative md:block" v-for="item in state.images" :key="item">
          <img
            :class="item === 'y' && 'mt-2'"
            class="brightness-50 hover:brightness-100 transition-all duration-500 hover:opacity-100"
            v-if="item !== 'space'"
            :src="'./text/' + item + '.png'"
          />
          <div class="md:w-5 lg:w-10 xl:w-72" v-else></div>
        </div>
        <div class="flex block md:hidden w-screen items-center flex-col">
          <div class="flex">
            <div v-for="(item, index) in state.images" :key="item">
              <img
                v-if="index < 5"
                :class="item === 'y' && 'mt-2'"
                class="lg:bg-blend-darken h-10 transition-all duration-500 hover:opacity-100"
                :src="'./text/' + item + '.png'"
              />
            </div>
          </div>

          <div class="flex">
            <div v-for="(item, index) in state.images" :key="item">
              <img
                v-if="index >= 6"
                :class="item === 'y' && 'mt-2'"
                class="h-10 transition-all duration-500 hover:opacity-100"
                :src="'./text/' + item + '.png'"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-5 mt-16 md:mt-10 lg:mt-20 3xl:mt-80 md:px-0 md:grid grid-cols-2" id="partners">
      <div class="md:hidden md:mx-14 md:w-1/2">
        <h1 class="text-center md:text-5xl mt-11 lg:text-6xl md:mt-0 md:text-left">Partners</h1>

        <div class="text-left mt-8 md:px-0 md:mt-8 mb-4">
          Excom Society cooperates with many trustworthy partners that will help the Excoms to successfully carry out the project and fulfill the roadmap. We
          make sure to collabore with the best companies in the industry to remain successful long term.

          <h2 class="pt-4 text-xl font-bold pb-1">Current partners</h2>
          <ul>
            <!--  <li>
                 MAGIC EDEN </li> -->

            <li>
              <a class="text-pink underline" target="_blank" href=" https://heavenland.io">Heavenland</a>
              <p>
                Heavenland is the main backer and a private investor to Excom Society. Heavenland invested $50,000 during the private sale into Excom Society.
                As part of the deal, Heavenland will receive 10% of all NFTs (666) which will be then distributed to Heavenland holders based on rules created
                by Heavenland.
              </p>
            </li>

            <li><a class="text-pink underline" target="_blank" href="https://solamids.io/">Solamids</a></li>
          </ul>
        </div>
      </div>

      <div>
        <img class="md:-ml-5 mt-4 md:mt-0 md:-mb-1" alt="Side" src="../assets/partners/partners.png" />
      </div>

      <div class="hidden md:block md:mx-14 md:w-1/2">
        <h1 class="text-center md:text-left">Partners</h1>

        <p class="text-left md:px-0 mt-8 mb-4">
          Excom Society cooperates with many trustworthy partners that will help the Excoms to successfully carry out the project and fulfill the roadmap. We
          make sure to collabore with the best companies in the industry to remain successful long term.
        </p>
        <h2 class="pb-1">Current partners</h2>
        <ul class="mb-2">
          <!--  <li>
                 MAGIC EDEN </li> -->

          <li class="mb-2"><a class="text-pink underline" target="_blank" href=" https://heavenland.io">Heavenland</a></li>
          <p>
            Heavenland is the main backer and a private investor to Excom Society. Heavenland invested $50,000 during the private sale into Excom Society. As
            part of the deal, Heavenland will receive 10% of all NFTs (666) which will be then distributed to Heavenland holders based on rules created by
            Heavenland.
          </p>
          <li class="mt-2"><a class="text-pink underline" target="_blank" href="https://solamids.io/">Solamids</a></li>
        </ul>
      </div>
    </section>
    <section id="docs" class="w-full mt-5 flex flex-col items-center justify-center relative px-5">
      <img class="absolute h-full w-full opacity-40" src="../assets/docs.png" />
      <h1 class="text-center relative z-[2] pb-5">Docs</h1>
      <div class="flex-col justify-center items-center relative flex">
        <a target="_blank" href="../tokenomics.pdf" title=""><i class="fa-solid pr-2 mb-2 text-pink fa-download"></i>Tokenomics </a>
        <a target="_blank" href="../litepaper.pdf" title=""><i class="fa-solid pr-2 text-pink fa-download"></i> Litepaper</a>
      </div>
    </section>
    <section id="faq">
      <h1 class="text-center">FAQ</h1>
      <div class="flex px-5 md:px-0 md:w-2/3 lg:w-2/3 2xl:w-1/2 mx-auto mt-8 justify-center items-center">
        <img ref="faq" class="hidden lg:block lg:h-[22rem] md:h-[16rem] z-10 -ml-32 mr-20" src="../assets/faq/Faq.png" />
        <div>
          <template v-for="(question, index) in state.questions" :key="index">
            <question :question="question" />
            <!--  <div   v-if="index !== state.questions.length - 1" class="border-b absolute  w-1/3 border-pink border-1"></div> -->
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { isMemberExpression } from "@vue/compiler-core"
import { onMounted, onBeforeUnmount, computed, ref, reactive } from "vue"

import Question from "./Question.vue"
import gsap from "gsap"

let tl1 = gsap.timeline({})

const faq = ref(null)
const card = ref(null)

const interval = ref(null)

const state = reactive({
  teams: {
    heavenland: [
      {
        name: "John",

        image: "heaven_john",
      },
      {
        name: "Thomas",

        image: "heaven_thomas",
      },
      {
        name: "Viktor",

        image: "heaven_victor",
      },
    ],
    excom: [
      { name: "Newt", image: "excom_newt" },
      {
        name: "James",
        image: "excom_james",
      },
      {
        name: "Zayn",
        image: "excom_zayn",
      },
      {
        name: "Nina",
        image: "excom_nina",
      },
      {
        name: "Judy-lu",
        image: "excom_judy",
      },
    ],
  },
  images: ["E", "x", "c", "o", "m", "space", "s", "o2", "c2", "i", "e2", "t", "y"],
  questions: [
    {
      question: "What is the main purpose of Excom Society?",
      content:
        "The purpose is as simple as web3 itself. To bring faith and powerful tool for everyone admiring Solana NFT space to grasp their opportunity to shine in virtual space, be part of the changing world and powerful DAO which will decide how big Excom Society will grow.",
    },
    {
      question: "What is the role of the Heavenland team?",

      content:
        "Excom society formed a strong partnership with the Heavenland Metaverse. The deal includes Excom’s integration into Heavenland and much more. Also, Heavenland team becomes part of the Advisory board to ensure smooth launch and success of the Excom Society.",
    },
    /*  {
        question: "When to mint?",
  
        content: "Excom Society Launch is planned for Late August.",
      }, */
    /*  {
        question: "What is the total supply and mint price?",
  
        content: "Total supply and mint price will be announced at least 7 days prior to the mint.",
      }, */
    {
      question: "What will be the royalty %?",

      content: "Artist royalties are set to 5% from which up to 50% will be returned back to holders.",
    },
    {
      question: "Will there be WL?",

      content: "Yes, WL conditions for the launch will be announced together with the launch details.",
    },
    {
      question: "How can I join the Excoms community?",
      urls: [" https://discord.gg/HQX6pSnpsN ", "https://twitter.com/ExcomSociety"],
    },
  ],
})
const canvas = ref(null)
let hueCol = 180
const mouse = {
  x: undefined,
  y: undefined,
}

let particles = []

const gif = ref(false)

onMounted(async () => {
  tl1.to(faq.value, {
    repeat: -1,
    repeatDelay: 2,
    y: 10,
    duration: 2,
  })

  tl1.to(faq.value, {
    repeat: -1,
    repeatDelay: 2,
    y: 0,

    duration: 2,
  })
})

class Particle {
  constructor() {
    this.x = mouse.x
    this.y = mouse.y
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.color = "hsl(" + hueCol + ", 100%, 50%)"
    this.size = Math.random() * 5 + 1
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.size -= 0.1
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2)
    ctx.fill()
  }
}
function handleParticles() {
  for (var i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].draw()
    for (var j = i + 1; j < particles.length; j++) {
      const dx = particles[j].x - particles[i].x
      const dy = particles[j].y - particles[i].y
      const distance = dx * dx + dy * dy
      if (distance < 10000) {
        ctx.beginPath()
        ctx.strokeStyle = particles[i].color
        ctx.lineWidth = 0.3
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
    if (particles.size < 0.3) {
      particles.splice(i, 1)
      i--
    }
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  // ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
  handleParticles()
  hueCol += 0
  requestAnimationFrame(animate)
}
</script>

<style>
.canvas {
  position: fixed;
  background-color: black;
  width: 100%;
  bottom: 0;
  top: 0;
  left: 0;
}

.parent {
  grid-template-columns: 70px repeat(4, 1fr);
  grid-template-rows: 70px repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

@media only screen and (min-width: 4000px) {
  .parent {
    grid-template-columns: 150px repeat(4, 1fr);
    grid-template-rows: 150px repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .navbar-item__icon {
    height: 40px;
  }
}

.div1 {
  grid-area: 1 / 1 / 2 / 6;
}
.div2 {
  grid-area: 2 / 1 / 6 / 2;
}
.div3 {
  grid-area: 2 / 2 / 6 / 6;
}

li {
  color: white;
}

.gradient-border {
  --border-width: 4px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: white;
  background: #222;
  border-radius: 100%;
}
.gradient-border::after {
  position: absolute;
  content: "";
  top: calc(-1 * var(--border-width));
  left: calc(-1 * var(--border-width));
  z-index: -1;
  width: calc(100% + var(--border-width) * 2);
  height: calc(100% + var(--border-width) * 2);
  background: linear-gradient(60deg, hsl(224, 85%, 66%), hsl(269, 85%, 66%), hsl(314, 85%, 66%), #27f5d0, #fe3991, #27f5d0, #27f5d0, hsl(179, 85%, 66%));
  background-size: 300% 300%;
  background-position: 0 50%;
  border-radius: 100%;
  animation: moveGradient 4s alternate infinite;
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}

.my-border {
  border-style: solid;
  border-image: linear-gradient(to right, #27f5d0, #fe3991) 1;
}
</style>
