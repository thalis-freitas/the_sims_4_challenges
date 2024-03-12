<script>
import ChallengeLink from './ChallengeLink.vue'

</script>

<template>
  <div class="bg-secondary">
    <section
      id="challenges"
      class="container mx-auto p-6"
    >
      <h1 class="p-4 text-3xl font-bold text-white">
        Desafios
      </h1>

      <div class="flex w-full">
        <ChallengeLink
          link="https://desafiosptbr.tumblr.com/post/169239531401/tradu%C3%A7%C3%A3o-do-desafio-not-so-berry-pt-br"
          imageSrc="../assets/images/challenges/not_so_berry.jpeg"
          altText="Desafio not so berry"
          description="Not so berry"
        />
        <ChallengeLink
          link="https://thesimschallenges.wixsite.com/sims/do-lixo-ao-luxo"
          imageSrc="../assets/images/challenges/lixo_ao_luxo.jpeg"
          altText="Desafio do lixo ao luxo"
          description="Lixo ao luxo"
        />
        <ChallengeLink
          link="https://lalasims.wordpress.com/2016/07/27/desafio-da-viuva-negra/comment-page-1/"
          imageSrc="../assets/images/challenges/viuva_negra.jpeg"
          altText="Desafio da viúva negra"
          description="Viúva negra"
        />
      </div>
      <div class="flex w-full">
        <ChallengeLink
          link="https://thesimschallenges.wixsite.com/sims/desafio-dos-7-bebes"
          imageSrc="../assets/images/challenges/sete_bebes.jpeg"
          altText="Desafio dos sete bebês"
          description="Sete bebês"
        />
        <ChallengeLink
          link="https://www.ligadosgames.com/desafios-incriveis-the-sims-4/#anchor-desafio1"
          imageSrc="../assets/images/challenges/manicomio.jpg"
          altText="Desafio do manicômio"
          description="Manicômio"
        />
        <ChallengeLink
          link="https://www.ligadosgames.com/desafios-incriveis-the-sims-4/#anchor-desafio9"
          imageSrc="../assets/images/challenges/vida_longa.jpg"
          altText="Desafio vida longa"
          description="Vida longa"
        />
      </div>
    </section>
  </div>
</template>
