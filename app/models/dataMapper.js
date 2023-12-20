const client = require('../database/client');

const dataMapper = {
  async getPokemonList() {
    const queryStream = {
      text: `
			SELECT p.*, json_agg(row_to_json(type.*)) AS types
			FROM pokemon_type 
			JOIN pokemon AS p ON p.numero = pokemon_type.pokemon_numero 
			JOIN type ON type.id = pokemon_type.type_id
			GROUP BY p.id, p.nom, p.pv, p.attaque, p.defense, p.attaque_spe, p.defense_spe, p.vitesse, p.numero
			ORDER BY p.numero;`,
      values: [],
    };

    const result = await client.query(queryStream);

    return result.rows;
  },
  async getOnePokemon(id) {
    const queryStream = {
      text: `
			SELECT p.*, json_agg(row_to_json(type.*)) AS type 
			FROM pokemon_type 
			JOIN pokemon AS p ON p.numero = pokemon_type.pokemon_numero 
			JOIN type ON type.id = pokemon_type.type_id 
			WHERE numero = $1 
			GROUP BY p.id, p.nom, p.pv, p.attaque, p.defense, p.attaque_spe, p.defense_spe, p.vitesse, p.numero;
			`,
      values: [id],
    };

    const result = await client.query(queryStream);

    return result.rows[0];
  },
  async getSearchResult(searchString) {
    const queryStream = {
      text: `
			SELECT p.*, json_agg(row_to_json(type.*)) AS types
			FROM pokemon_type 
			JOIN pokemon AS p ON p.numero = pokemon_type.pokemon_numero 
			JOIN type ON type.id = pokemon_type.type_id 
			WHERE nom ILIKE $1 
			GROUP BY p.id, p.nom, p.pv, p.attaque, p.defense, p.attaque_spe, p.defense_spe, p.vitesse, p.numero;
			`,
      values: [`%${searchString}%`],
    };

		
    const result = await client.query(queryStream);

    return result.rows;
  },
};

module.exports = dataMapper;
