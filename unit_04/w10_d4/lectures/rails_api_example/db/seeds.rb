10.times do
  User.create({
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    location: FFaker::Address.city,
    age: Random.new.rand(0..100),
    education: FFaker::Education.degree,
    email: FFaker::Internet.email
  })
end

100.times do
  Post.create({
    content: FFaker::HipsterIpsum.paragraph,
    title: FFaker::HipsterIpsum.word,
    user_id: Random.new.rand(1..10)
  })
end
