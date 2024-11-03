To design and implement the Poetry Assistant, it was essential to analyze and break up the problem into various stages: input, processing and output. The inputs were the word list used to deliver the rhyme matches and the desired word for rhyming. Processing included the extraction of the last two or three characters of the desired word and matching the last two or three characters of the desired word to similar words from the list. The output was the suggested words that rhyme with the given word. This analysis was necessary to understand the task and its solution.


Design Defects

Capturing Perfect Rhymes: This approach relies on matching the ending characters, which might not always work for capturing all perfect rhymes. Libraries like Metaphone or Soundex can be used to convert words to their phonetic equivalents.

Limited Word Selection: A real-world implementation would use a more comprehensive rhyme dictionary and an external API would be more suitable for rhyme suggestions.

Accuracy of Input Word: This program assumes that actual English words are being input to generate a rhyme. For a better approach a poetry assistant would be implemented to catch nonsensical input which may not be suitable for consideration as an actual word eg babalala.

