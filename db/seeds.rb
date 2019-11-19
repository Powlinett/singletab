Tab.destroy_all
Folder.destroy_all
User.destroy_all

user = User.create!(
	username: 'mehdinet',
	email: 'mehdi@gmail.com',
	password: 'azerty'
	)

main_folder = Folder.create!(
	name: 'importer des produits de chine',
	user: user
	)

folder1 = Folder.create!(
	name: 'législation',
    parent: main_folder,
    user: user
	)

folder2 = Folder.create!(
    name: 'outils',
    parent: main_folder,
    user: user
	)

folder3 = Folder.create!(
    name: 'fournisseurs',
    parent: main_folder,
    user: user
	)

23.times do |tab|
	tab = Tab.create!(
        url: Faker::Internet.url,
        title: Faker::ChuckNorris.fact,
        description: Faker::Lorem.paragraph(sentence_count: 4),
        folder: Folder.all.sample
		)
end