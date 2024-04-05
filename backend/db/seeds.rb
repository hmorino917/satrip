#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create!(
  name: "user001",
  provider: "email",
  uid: "user001@example.com",
  password: Devise.friendly_token[0, 6],
  email: "user001@example.com",
  confirmed_at: Time.now
)
sauna1 = Sauna.create!(
  name: "サウナ施設A",
  address: "東京都新宿区"
)

Post.create!(
  user_id: user1.id,
  sauna_id: sauna1.id,
  trip_title: '初めてのサウナ体験',
  trip_content: 'とてもリラックスできた体験でした。',
  sauna_content: '清潔感があり、温度もちょうど良かった。',
  like_count: '0',
  visit_order: 1
)

Post.create!(
  user_id: user1.id,
  sauna_id: sauna1.id,
  trip_title: '最高のサウナタイム',
  trip_content: '音楽を聴きながらのサウナは最高です。',
  sauna_content: '音響設備が整った素晴らしいサウナでした。',
  like_count: '5',
  visit_order: 2
)
