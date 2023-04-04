json.licenses do
  json.array! @licenses, :id, :key, :platform, :status, :game_id
end